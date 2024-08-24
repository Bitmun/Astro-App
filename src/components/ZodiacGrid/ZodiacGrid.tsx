import { zodiacSigns } from '../../data/zodiacData';
import { ZodiacCard } from '../ZodiacCard/ZodiacCard';

import { ZodiacGridProps } from './type';
import styles from './ZodiacGrid.module.scss';

const ZodiacGrid = ({ onZodiacSelect }: ZodiacGridProps) => {
  return (
    <div className={styles.gridWrapper}>
      {zodiacSigns.map((zodiac) => {
        const { sign, period } = zodiac;
        return (
          <ZodiacCard
            key={zodiac.sign}
            sign={sign}
            period={period}
            onClick={() => onZodiacSelect(sign)}
          />
        );
      })}
    </div>
  );
};

export default ZodiacGrid;
