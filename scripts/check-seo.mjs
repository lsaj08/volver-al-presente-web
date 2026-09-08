import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { SITE_PATHS, render } from "../dist-ssr/entry-server.js";

const output = new URL("../dist/", import.meta.url);
const titles = new Set();
const descriptions = new Set();
const sitemap = await readFile(new URL("sitemap.xml", output), "utf8");
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
  const schema = JSON.parse(html.match(/<script id="site-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema["@graph"][0].name, "Volver al Presente");

  for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
    if (tag[0].includes('target="_blank"')) assert.ok(tag[0].includes('rel="noopener noreferrer"'));
    const href = tag[0].match(/href="(\/[^"?#]*)"/)?.[1];
    if (href) assert.ok(SITE_PATHS.includes(href), `${path}: enlace interno inexistente ${href}`);
  }
  for (const asset of new Set(html.match(/\/assets\/[\w.-]+/g))) {
    await access(new URL(asset.slice(1), output));
  }
  if (path === "/404.html") {
    assert.ok(html.includes('content="noindex, follow"'));
    assert.ok(!sitemap.includes(meta.canonical));
  } else {
    assert.ok(sitemap.includes(`<loc>${meta.canonical}</loc>`));
    assert.ok(html.includes('content="index, follow, max-image-preview:large"'));
  }
}
const azure = JSON.parse(await readFile(new URL("staticwebapp.config.json", output), "utf8"));
assert.equal(azure.responseOverrides[404].rewrite, "/404.html");
assert.ok(!azure.navigationFallback, "No ocultar páginas inexistentes con HTTP 200");
assert.equal(azure.trailingSlash, "never");
process.stdout.write("SEO verificado: 15 rutas, 404, metadatos, enlaces, imágenes, seguimiento y sitemap.\n");
