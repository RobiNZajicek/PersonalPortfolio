import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/en.json';
import czTranslation from './locales/cz/cz.json';

const resources = {
  en: { translation: enTranslation },
  cz: { translation: czTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
