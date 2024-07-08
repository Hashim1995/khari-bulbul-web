import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import azJSON from './translations/az.json';
import enJSON from './translations/en.json';
import ruJSON from './translations/ru.json';
import deJSON from './translations/de.json';

const currentLayoutLanguage =
  localStorage.getItem('currentLayoutLanguage') || 'de'; // Default to 'az' if not found

i18n
  .use(initReactI18next)
  .init({
    resources: {
      az: { ...azJSON },
      en: { ...enJSON },
      de: { ...deJSON }
    },
    lng: currentLayoutLanguage
  });

export default i18n;
