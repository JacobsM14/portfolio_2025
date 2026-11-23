import en from "./en.json";
import es from "./es.json";

const ui = { en, es };

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof en;

export const defaultLang: Lang = "en";

// Each language's name in its own language
export const languages: Record<Lang, string> = {
  en: "English",
  es: "Español",
};

// Locale codes for Open Graph's og:locale
export const ogLocales: Record<Lang, string> = {
  en: "en_US",
  es: "es_ES",
};

export function isLang(lang: string | undefined): lang is Lang {
  return lang !== undefined && lang in ui;
}

export function getLang(locale: string | undefined): Lang {
  return isLang(locale) ? locale : defaultLang;
}

export function isUIKey(key: string): key is UIKey {
  return key in ui[defaultLang];
}

export function useTranslations(lang: string | undefined) {
  const dict: Partial<Record<UIKey, string>> = ui[getLang(lang)];
  return (key: UIKey) => dict[key] ?? ui[defaultLang][key];
}

// "/es/" -> "/", so the same page can be linked in another language
export function pathWithoutLocale(pathname: string, lang: string) {
  return pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "") || "/";
}
