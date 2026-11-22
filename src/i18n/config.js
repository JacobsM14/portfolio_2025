import en from "./locales/en.js";
import es from "./locales/es.js";

export const DEFAULT_LANGUAGE = "en";

export const locales = { en, es };

export const SUPPORTED_LANGUAGES = Object.keys(locales);

export const PATHS = { en: "/", es: "/es/" };

export const STORAGE_KEY = "language";

export const SITE_URL = "https://marcel14.dev";

export function resolveLanguage(value) {
  const code = value?.toLowerCase().split("-")[0];
  return SUPPORTED_LANGUAGES.includes(code) ? code : DEFAULT_LANGUAGE;
}

export function detectInitialLanguage() {
  const path = `${window.location.pathname}/`;

  const fromPath = SUPPORTED_LANGUAGES.find(
    (lang) => PATHS[lang] !== "/" && path.startsWith(PATHS[lang]),
  );

  return fromPath ?? resolveLanguage(document.documentElement.lang);
}

function collectPaths(value, prefix = "") {
  if (value === null || typeof value !== "object") return [prefix];

  return Object.entries(value).flatMap(([key, child]) =>
    collectPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

if (import.meta.env?.DEV) {
  const reference = new Set(collectPaths(locales[DEFAULT_LANGUAGE]));

  for (const [lang, locale] of Object.entries(locales)) {
    if (lang === DEFAULT_LANGUAGE) continue;

    const paths = new Set(collectPaths(locale));
    const missing = [...reference].filter((path) => !paths.has(path));
    const extra = [...paths].filter((path) => !reference.has(path));

    if (missing.length) console.warn(`[i18n] "${lang}" is missing:`, missing);
    if (extra.length) console.warn(`[i18n] "${lang}" has extra keys:`, extra);
  }
}
