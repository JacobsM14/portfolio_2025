import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../i18n";

import CvIcon from "../assets/icons/CvIcon";
import cv from "../assets/cv.pdf";

export default function Header() {
  const { t, i18n } = useTranslation();
  const languageCode = i18n.resolvedLanguage.toUpperCase();

  return (
    <div className="col-span-1 row-span-1 flex items-center justify-between gap-2 mb-2 md:col-span-9 md:mb-0">
      <a
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("labels.viewCv")}
        title={t("labels.viewCv")}
        className="shrink-0 h-full min-h-14 aspect-square bg-primary/5 border border-gray-normal rounded-3xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <CvIcon width="2em" height="2em" />
      </a>
      <div className="flex-1 h-full bg-primary/5 border border-gray-normal rounded-3xl flex items-center justify-between px-4 py-2 md:px-8 md:py-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary">
          {t("labels.headerTitle")}
        </h1>
        <button
          type="button"
          className="w-10 h-10 bg-dark border border-gray-normal rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={toggleLanguage}
          aria-label={`${languageCode} – ${t("labels.changeLanguage")}`}
          title={t("labels.changeLanguage")}
        >
          {languageCode}
        </button>
      </div>
    </div>
  );
}
