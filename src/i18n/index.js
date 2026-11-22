import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  PATHS,
  STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  detectInitialLanguage,
  locales,
} from "./config";

const resources = Object.fromEntries(
  Object.entries(locales).map(([lang, translation]) => [lang, { translation }]),
);

i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
  initAsync: false,
});

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.title = i18n.t("meta.title", { lng: lang });

  const { pathname, search, hash } = window.location;

  if (pathname !== PATHS[lang]) {
    window.history.replaceState(null, "", PATHS[lang] + search + hash);
  }
}

applyLanguage(i18n.resolvedLanguage);
i18n.on("languageChanged", applyLanguage);

export function toggleLanguage() {
  const index = SUPPORTED_LANGUAGES.indexOf(i18n.resolvedLanguage);
  const next = SUPPORTED_LANGUAGES[(index + 1) % SUPPORTED_LANGUAGES.length];

  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be blocked
  }
  i18n.changeLanguage(next);
}

export default i18n;
