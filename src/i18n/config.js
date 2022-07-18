import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: require("./locales/Bn/translation.json"),
    },
    bn: {
      translation: require("./locales/En/translation.json"),
    },
  },

  interpolation: {
    escapeValue: false,
  },
});

// i18n.languages = ["en", "bn"];
// i18n.init();

// export { i18n };

export default i18n;
