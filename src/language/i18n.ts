import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, id } from "./locales";

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    id: {
      translation: id
    },
    en: {
      translation: en
    },
  },
});

export default i18n;