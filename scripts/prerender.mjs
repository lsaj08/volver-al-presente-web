import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { render, SITE_PATHS, SOCIAL_IMAGE, SITE_SCHEMA } from "../dist-ssr/entry-server.js";

const output = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", output), "utf8");
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]));
const metaTag = (name, value, attribute = "name") =>
  `<meta ${attribute}="${name}" content="${escape(value)}" />`;

if (!template.includes("<!--seo-start-->")) throw new Error("Falta el marcador SEO en index.html");

for (const path of [...SITE_PATHS, "/404.html"]) {
  const { html, meta } = render(path);
  const head = [
    `<title>${escape(meta.title)}</title>`,
    metaTag("description", meta.description),
    metaTag("robots", meta.robots),
    `<link rel="canonical" href="${escape(meta.canonical)}" />`,
    ...Object.entries({
      "og:title": meta.ogTitle, "og:description": meta.ogDescription,
      "og:type": meta.ogType, "og:url": meta.canonical,
      "og:site_name": "Volver al Presente", "og:locale": "es_CR",
      "og:image": SOCIAL_IMAGE, "og:image:alt": "Psicóloga Marcela Zamora",
    }).map(([key, value]) => metaTag(key, value, "property")),
    metaTag("twitter:card", "summary_large_image"),
    metaTag("twitter:title", meta.ogTitle),
    metaTag("twitter:description", meta.ogDescription),
    metaTag("twitter:image", SOCIAL_IMAGE),
    `<script id="site-schema" type="application/ld+json">${JSON.stringify(SITE_SCHEMA).replace(/</g, "\\u003c")}</script>`,
    path === "/" ? `<link rel="preload" as="image" href="${new URL(SOCIAL_IMAGE).pathname}" fetchpriority="high" />` : "",
  ].filter(Boolean).join("\n    ");
  const page = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, () => head)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  const destination = new URL(path === "/404.html" ? "404.html" : `${path.slice(1)}${path === "/" ? "" : "/"}index.html`, output);
  await mkdir(new URL(".", destination), { recursive: true });
  await writeFile(destination, page);
}

const urls = SITE_PATHS.map((path) => `<url><loc>${escape(render(path).meta.canonical)}</loc></url>`);
await writeFile(new URL("sitemap.xml", output), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
process.stdout.write(`HTML generado: ${SITE_PATHS.length} páginas + 404 y sitemap en ${fileURLToPath(output)}\n`);
