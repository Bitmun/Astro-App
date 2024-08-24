import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aries: 'Aries',
      taurus: 'Taurus',
      gemini: 'Gemini',
      cancer: 'Cancer',
      leo: 'Leo',
      virgo: 'Virgo',
      libra: 'Libra',
      scorpio: 'Scorpio',
      sagittarius: 'Sagittarius',
      capricorn: 'Capricorn',
      aquarius: 'Aquarius',
      pisces: 'Pisces',
      back: 'Back',
      horoscope: 'Horoscope',
      today: 'Today',
      loading: 'Loading...',
    },
  },
  ru: {
    translation: {
      aries: 'Овен',
      taurus: 'Телец',
      gemini: 'Близнецы',
      cancer: 'Рак',
      leo: 'Лев',
      virgo: 'Дева',
      libra: 'Весы',
      scorpio: 'Скорпион',
      sagittarius: 'Стрелец',
      capricorn: 'Козерог',
      aquarius: 'Водолей',
      pisces: 'Рыбы',
      back: 'Назад',
      horoscope: 'Гороскоп',
      today: 'Сегодня',
      loading: 'Загрузка...',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
