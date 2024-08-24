import { useEffect } from 'react';

import i18n from '../i18n';

const useTelegramLanguage = () => {
  useEffect(() => {
    const userLanguage = window.Telegram.WebApp.initDataUnsafe?.user?.language_code;
    if (userLanguage === 'ru') {
      i18n.changeLanguage('ru');
    } else {
      i18n.changeLanguage('en');
    }
  }, []);
};

export default useTelegramLanguage;
