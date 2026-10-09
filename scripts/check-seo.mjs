import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import { SERVICE_AREAS, SITE_PATHS, render } from "../dist-ssr/entry-server.js";

const output = new URL("../dist/", import.meta.url);
const titles = new Set();
const descriptions = new Set();
const sitemap = await readFile(new URL("sitemap.xml", output), "utf8");

// Presupuesto de peso por imagen servida al navegador.
// Evita que vuelva a colarse un asset de cientos de KB para pintarse en miniatura.
const MAX_IMAGE_KB = 200;
const seenAssets = new Set();
const SERVICE_SLUGS = SERVICE_AREAS.map(({ slug }) => slug);
for (const path of [...SITE_PATHS, "/404.html"]) {
  const file = path === "/404.html" ? "404.html" : `${path.slice(1)}${path === "/" ? "" : "/"}index.html`;
  const html = await readFile(new URL(file, output), "utf8");
  const { meta } = render(path);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: un H1 en HTML inicial`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: canonical único`);
  assert.ok(html.includes(`href="${meta.canonical}"`), `${path}: canonical correcto`);
  assert.equal((html.match(/data-tracking-id="tk_ed868388bb93435e961aa94901aeaefa"/g) || []).length, 1);
  assert.equal((html.match(/<title>/g) || []).length, 1);
  assert.ok(!titles.has(meta.title), `${path}: título duplicado`);
  assert.ok(!descriptions.has(meta.description), `${path}: descripción duplicada`);
  titles.add(meta.title);
  descriptions.add(meta.description);
  assert.ok(!html.includes("volveralpresente.cr"));
  assert.ok(!html.includes("/src/assets/"), `${path}: recurso sin compilar`);
  assert.ok(!html.includes("PENDIENTE_AGREGAR_LINK"));
  assert.ok(html.includes('<meta property="og:image"'));
  // La imagen social debe declarar 1200x628 (1.91:1) o las tarjetas la recortan.
  assert.ok(html.includes('<meta property="og:image:width" content="1200" />'), `${path}: falta og:image:width`);
  assert.ok(html.includes('<meta property="og:image:height" content="628" />'), `${path}: falta og:image:height`);
  assert.ok(html.includes('<html lang="es-CR">'), `${path}: idioma del documento`);
  assert.ok(html.includes('rel="icon" href="/favicon.ico"'), `${path}: falta favicon`);
  assert.ok(html.includes('rel="manifest"'), `${path}: falta manifest`);

  const schema = JSON.parse(html.match(/<script id="site-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema["@graph"][0].name, "Volver al Presente");

  // Cada sede presencial debe publicarse como LocalBusiness con dirección completa:
  // es la señal que usa Google para las búsquedas locales.
  const sedes = schema["@graph"].filter((node) => String(node["@type"]).includes("MedicalBusiness"));
  assert.equal(sedes.length, 2, `${path}: se esperaban dos sedes en los datos estructurados`);
  for (const sede of sedes) {
    assert.ok(sede.address?.addressLocality, `${path}: sede sin localidad`);
    assert.ok(sede.address?.addressCountry, `${path}: sede sin país`);
    assert.ok(sede.telephone, `${path}: sede sin teléfono`);
    assert.ok(sede.hasMap?.startsWith("https://"), `${path}: sede sin enlace de mapa`);
    // Coordenadas dentro del territorio de Costa Rica: detecta un signo invertido
    // o un valor mal transcrito antes de publicarlo.
    const { latitude, longitude } = sede.geo ?? {};
    assert.ok(latitude > 8 && latitude < 11.3, `${path}: latitud fuera de Costa Rica (${latitude})`);
    assert.ok(longitude > -86 && longitude < -82.5, `${path}: longitud fuera de Costa Rica (${longitude})`);
  }

  // Perfiles oficiales: vinculan el sitio con la misma entidad en redes.
  const conPerfiles = schema["@graph"].filter((node) => Array.isArray(node.sameAs));
  assert.ok(conPerfiles.length >= 3, `${path}: faltan perfiles sameAs`);
  for (const node of conPerfiles) {
    for (const perfil of node.sameAs) {
      assert.ok(perfil.startsWith("https://"), `${path}: perfil no seguro ${perfil}`);
    }
  }

  for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
    if (tag[0].includes('target="_blank"')) assert.ok(tag[0].includes('rel="noopener noreferrer"'));
    const href = tag[0].match(/href="(\/[^"?#]*)"/)?.[1];
    if (href) assert.ok(SITE_PATHS.includes(href), `${path}: enlace interno inexistente ${href}`);
  }
  for (const asset of new Set(html.match(/\/assets\/[\w.-]+/g))) {
    const file = new URL(asset.slice(1), output);
    await access(file);
    if (/\.(png|jpe?g|webp|gif)$/i.test(asset) && !seenAssets.has(asset)) {
      seenAssets.add(asset);
      const { size } = await stat(file);
      assert.ok(size / 1024 <= MAX_IMAGE_KB, `${asset}: ${Math.round(size / 1024)} KB supera el presupuesto de ${MAX_IMAGE_KB} KB`);
    }
  }
  if (path === "/404.html") {
    assert.ok(html.includes('content="noindex, follow"'));
    assert.ok(!sitemap.includes(meta.canonical));
  } else {
    assert.ok(sitemap.includes(`<loc>${meta.canonical}</loc>`));
    assert.ok(html.includes('content="index, follow, max-image-preview:large"'));
  }

  // Las páginas de servicio llevan ficha propia y migas de pan.
  const isService = SERVICE_SLUGS.includes(path.slice(1));
  if (isService) {
    const pageSchema = JSON.parse(html.match(/<script id="page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const types = pageSchema.map((node) => node["@type"]);
    assert.ok(types.includes("Service"), `${path}: falta la ficha de servicio`);
    assert.ok(types.includes("BreadcrumbList"), `${path}: faltan las migas de pan`);
    // La página no puede quedar aislada: debe enlazar a otras áreas y al listado.
    const internos = [...html.matchAll(/href="\/([\w-]+)"/g)].map((match) => match[1]);
    assert.ok(internos.includes("servicios"), `${path}: sin enlace al listado de servicios`);
    assert.ok(
      SERVICE_SLUGS.some((slug) => slug !== path.slice(1) && internos.includes(slug)),
      `${path}: sin enlaces a áreas relacionadas`
    );
  }
}

assert.ok(sitemap.includes("<lastmod>"), "El sitemap debe declarar lastmod");
for (const icon of ["favicon.ico", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "site.webmanifest"]) {
  await access(new URL(icon, output));
}
const azure = JSON.parse(await readFile(new URL("staticwebapp.config.json", output), "utf8"));
assert.equal(azure.responseOverrides[404].rewrite, "/404.html");
assert.ok(!azure.navigationFallback, "No ocultar páginas inexistentes con HTTP 200");
assert.equal(azure.trailingSlash, "never");
process.stdout.write(
  `SEO verificado: ${SITE_PATHS.length} rutas, 404, metadatos, iconos, datos estructurados ` +
    `(${SERVICE_SLUGS.length} fichas de servicio + 2 sedes), enlaces internos, sitemap con lastmod ` +
    `y ${seenAssets.size} imágenes bajo ${MAX_IMAGE_KB} KB.\n`
);
