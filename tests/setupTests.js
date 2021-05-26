import '@testing-library/jest-dom/extend-expect';

// not really needed, but it does remove a console warning
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  // debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: { en: { translations: {} } },
});