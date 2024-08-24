import { useCallback, useEffect, useState } from 'react';

import { fetchHoroscope } from '../../api/api';

import styles from './HoroscopeModal.module.scss';
import { HoroscopeModalProps } from './type';

import { useTranslation } from 'react-i18next';

export const HoroscopeModal = ({ sign, onClose }: HoroscopeModalProps) => {
  const { t, i18n } = useTranslation();
  const [horoscope, setHoroscope] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getHoroscope = async () => {
    setIsLoading(true);
    try {
      const res = await fetchHoroscope(
        sign,
        i18n.language === 'ru' ? 'original' : 'translated',
      );
      setHoroscope(res.horoscope);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHoroscope();

    if (window.Telegram.WebApp.BackButton) {
      const backButton = window.Telegram.WebApp.BackButton;
      backButton.show();
      backButton.onClick(onClose);

      return () => {
        backButton.hide();
      };
    }
  }, [sign, t]);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      const touchStartX = e.changedTouches[0].screenX;

      const handleTouchEnd = (endEvent: TouchEvent) => {
        const touchEndX = endEvent.changedTouches[0].screenX;

        if (touchStartX > touchEndX + 50) {
          onClose();
        }

        document.removeEventListener('touchend', handleTouchEnd);
      };

      document.addEventListener('touchend', handleTouchEnd);
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleTouchStart]);

  const handleWrapperClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <button className={styles.modalWrapper} onClick={handleWrapperClick}>
      <div className={styles.modalContainer}>
        <h1>{t(sign)}</h1>
        {isLoading ? (
          <span className={styles.horoscopeText}>{t('loading')}</span>
        ) : (
          <span className={styles.horoscopeText}>{t(horoscope)}</span>
        )}
        <button onClick={onClose} className={styles.backButton}>
          {t('back')}
        </button>
      </div>
    </button>
  );
};
