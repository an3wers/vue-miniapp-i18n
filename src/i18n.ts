import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ru", // локаль по умолчанию
    debug: true,
    ns: ["header"], // по умолчанию предзагружаем header
    supportedLngs: ["en", "ru"],
    backend: {
      loadPath: "../locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
    preload: [],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
