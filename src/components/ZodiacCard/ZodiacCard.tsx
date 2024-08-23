import { ZodiacCardProps } from './type';

import { useTranslation } from 'react-i18next';

export const ZodiacCard = ({ sign, period, onClick }: ZodiacCardProps) => {
  const { t } = useTranslation();

  return (
    <button onClick={onClick}>
      <div>{t(sign)}</div>
      <div>{period}</div>
    </button>
  );
};
