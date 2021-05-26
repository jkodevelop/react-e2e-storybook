import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'Header Text': 'React Boilerplate',
      'Welcome to React': 'Welcome to React and react-i18next',
      'en': 'English',
      'fr': 'Française',
      'Footer': 'footer',
      'Not Found': 'Page not found',
      'hi-content': 'This is a simple end to end boilerplate project for react-redux',
      'add': 'add',
      'subtract': 'subtract',
      'example-lazy': 'Example of react lazy loading.',
      'example-lazy-inject': 'Example of react lazy loading and reducer injection.',
      'hi': 'Hi',
      'single-counter': 'Single Counter',
      'even-counter': 'Even Counter',
      'loading': 'Loading',
    }
  },
  fr: {
    translation: {
      'Header Text': 'React Plaque de chaudière',
      'Welcome to React': 'Bienvenue à React et react-i18next',
      'en': 'English',
      'fr': 'Française',
      'Footer': 'bas de page',
      'Not Found': 'Page non trouvée',
      'hi-content': 'Ceci est une simple fin pour mettre fin à projet pour boilerplate react-redux',
      'add': 'ajouter',
      'subtract': 'soustraire',
      'example-lazy': 'Exemple de chargement paresseux de react.',
      'example-lazy-inject': 'Exemple de chargement paresseux de react et d\'injection de reducer',
      'hi': 'Salut',
      'single-counter': 'Compteur unique',
      'even-counter': 'Même compteur',
      'loading': 'Chargement',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;