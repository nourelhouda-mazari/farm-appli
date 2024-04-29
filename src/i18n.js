import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInAr from './locales/ar/translation.json';
import translationsInFr from './locales/fr/translation.json';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


  const resources = {
  ar: {
    translation: translationsInAr
  },
  fr: {
    translation: translationsInFr
  },
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, 
    lng: localStorage.getItem("lang"), 
    debug: true,
    fallbackLng: "fr", 
    interpolation: {
      escapeValue: false
    },
    ns: "translation", 
    defaultNS: "translation"
  });
export default i18n;