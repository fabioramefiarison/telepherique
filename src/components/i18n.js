import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_fr from '../language/global_FR.json';
import global_mg from '../language/global_MG.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        global: global_fr
      },
      mg: {
        global: global_mg
      }
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // react déjà protège de xss
    }
  });

export default i18n;
