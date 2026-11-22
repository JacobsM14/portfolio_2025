import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  DEFAULT_LANGUAGE,
  PATHS,
  SITE_URL,
  STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  locales,
} from "../src/i18n/config.js";

// Renders /index.html as a template for every language in PATHS:
// "/" gets the default language and "/es/index.html" (a stub) gets Spanish.

const ESCAPES = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
const escapeHtml = (value) =>
  String(value).replace(/[&"<>]/g, (char) => ESCAPES[char]);

const urlFor = (lang) => new URL(PATHS[lang], SITE_URL).href;

const otherLanguages = (lang) =>
  SUPPORTED_LANGUAGES.filter((other) => other !== lang);

function redirectScript() {
  const paths = Object.fromEntries(
    otherLanguages(DEFAULT_LANGUAGE).map((lang) => [lang, PATHS[lang]]),
  );

  return `<script>
      (function () {
        var paths = ${JSON.stringify(paths)};
        var saved = null;
        try {
          saved = localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
        } catch (e) {}
        var lang =
          saved || (navigator.language || "").slice(0, 2).toLowerCase();
        if (Object.prototype.hasOwnProperty.call(paths, lang)) {
          window.stop();
          location.replace(paths[lang] + location.search + location.hash);
        }
      })();
    </script>`;
}

function render(template, lang) {
  const { meta } = locales[lang];

  const values = {
    lang,
    url: urlFor(lang),
    title: meta.title,
    description: meta.description,
    imageAlt: meta.imageAlt,
    ogLocale: meta.ogLocale,
  };

  const blocks = {
    redirect: lang === DEFAULT_LANGUAGE ? redirectScript() : "",
    alternates: [...SUPPORTED_LANGUAGES, "x-default"]
      .map((hreflang) => {
        const target = hreflang === "x-default" ? DEFAULT_LANGUAGE : hreflang;
        return `<link rel="alternate" hreflang="${hreflang}" href="${urlFor(target)}" />`;
      })
      .join("\n    "),
    "og-locale-alternates": otherLanguages(lang)
      .map(
        (other) =>
          `<meta property="og:locale:alternate" content="${locales[other].meta.ogLocale}" />`,
      )
      .join("\n    "),
  };

  return template
    .replace(/<!-- i18n:([\w-]+) -->/g, (match, name) => {
      if (!(name in blocks))
        throw new Error(`[i18n-html] Unknown block ${match}`);
      return blocks[name];
    })
    .replace(/\{\{(\w+)\}\}/g, (match, name) => {
      if (!(name in values))
        throw new Error(`[i18n-html] Unknown value ${match}`);
      return escapeHtml(values[name]);
    });
}

function sitemap() {
  const links = [...SUPPORTED_LANGUAGES, "x-default"]
    .map((hreflang) => {
      const target = hreflang === "x-default" ? DEFAULT_LANGUAGE : hreflang;
      return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${urlFor(target)}" />`;
    })
    .join("\n");

  const urls = SUPPORTED_LANGUAGES.map(
    (lang) => `  <url>\n    <loc>${urlFor(lang)}</loc>\n${links}\n  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>
`;
}

export default function i18nHtml() {
  let root;

  return {
    name: "i18n-html",
    configResolved(config) {
      root = config.root;
    },
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const lang = SUPPORTED_LANGUAGES.find(
          (candidate) => `${PATHS[candidate]}index.html` === ctx.path,
        );
        if (!lang) return html;

        const template =
          lang === DEFAULT_LANGUAGE
            ? html
            : readFileSync(resolve(root, "index.html"), "utf-8");
        return render(template, lang);
      },
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemap(),
      });
    },
  };
}
