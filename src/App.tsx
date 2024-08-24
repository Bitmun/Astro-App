import { useState } from 'react';

import { HoroscopeModal } from './components/HoroscopeModal/HoroscopeModal';
import { LanguageSwitch } from './components/LanguageSwitch/LanguageSwitch';
import ZodiacGrid from './components/ZodiacGrid/ZodiacGrid';
import useTelegramLanguage from './hooks/useTelegramLanguage';
import styles from './App.module.scss';
import i18n from './i18n';

import { I18nextProvider } from 'react-i18next';

export const App = () => {
  useTelegramLanguage();

  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);

  const openHoroscope = (sign: string) => {
    setSelectedZodiac(sign);
  };

  const closeHoroscope = () => {
    setSelectedZodiac(null);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className={styles.mainWrapper}>
        <LanguageSwitch />
        <ZodiacGrid onZodiacSelect={openHoroscope} />
        {selectedZodiac && (
          <HoroscopeModal sign={selectedZodiac} onClose={closeHoroscope} />
        )}
      </div>
    </I18nextProvider>
  );
};
