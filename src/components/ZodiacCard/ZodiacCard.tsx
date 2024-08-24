import { ZodiacCardProps } from './type';
import styles from './ZodiacCard.module.scss';

import { useTranslation } from 'react-i18next';

export const ZodiacCard = ({ zodiacInfo, onClick }: ZodiacCardProps) => {
  const { t } = useTranslation();
  const { sign, period, logo } = zodiacInfo;
  return (
    <button onClick={onClick} className={styles.cardWrapper}>
      <div>{t(sign)}</div>
      <img src={logo} alt="signLogo" />
      <div>{t(period)}</div>
    </button>
  );
};
