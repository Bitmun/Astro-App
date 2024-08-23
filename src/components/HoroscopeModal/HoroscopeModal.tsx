import { useEffect, useState } from 'react';

import { fetchHoroscope } from '../../api/api';

import { HoroscopeModalProps } from './type';

import { useTranslation } from 'react-i18next';

export const HoroscopeModal = ({ sign, onClose }: HoroscopeModalProps) => {
  const { t, i18n } = useTranslation();
  const [horoscope, setHoroscope] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const getHoroscope = async () => {
    fetchHoroscope(sign, i18n.language === 'ru' ? 'original' : 'translated').then(
      (res) => {
        setHoroscope(res.horoscope);
      },
    );
  };

  useEffect(() => {
    setIsLoading(true);
    getHoroscope().then(() => {
      setIsLoading(false);
    });
  }, [sign, t]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="horoscopeModal">
      <p>{t(sign)}</p>
      <p>{t(horoscope)}</p>
      <button onClick={onClose}>{t('back')}</button>
    </div>
  );
};
