import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
    </button>
  );
};
