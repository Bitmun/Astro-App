import { ZodiacCardProps } from './type';
import styles from './ZodiacCard.module.scss';

import { useTranslation } from 'react-i18next';

export const ZodiacCard = ({ sign, period, onClick }: ZodiacCardProps) => {
  const { t } = useTranslation();

  return (
    <button onClick={onClick} className={styles.cardWrapper}>
      <div>{t(sign)}</div>
      <div>{t(period)}</div>
    </button>
  );
};
