import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enBase from './translations/en.base.json';
import frBase from './translations/fr.base.json';

const resources = {
  en: {
    translation: enBase
  },
  fr: {
    translation: frBase
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: function(value, format, lng) {
        if(value instanceof Date){
          if(format === 'm/d/y'){ 
            return (value.getUTCMonth() + 1).toString() + "/" + value.getUTCDate() + "/" + value.getUTCFullYear().toString()
          }else{
            return value.getUTCFullYear().toString() + "-" + (value.getUTCMonth() + 1).toString() + "-" + value.getUTCDate()
          }
        }
        return value;
      }
    }
  });

export default i18n;