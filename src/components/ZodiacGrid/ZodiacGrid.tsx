import { zodiacSigns } from '../../data/zodiacData';
import { ZodiacCard } from '../ZodiacCard/ZodiacCard';

import { ZodiacGridProps } from './type';
import styles from './ZodiacGrid.module.scss';

const ZodiacGrid = ({ onZodiacSelect }: ZodiacGridProps) => {
  return (
    <div className={styles.gridWrapper}>
      {zodiacSigns.map((zodiacInfo) => {
        const { sign } = zodiacInfo;
        return (
          <ZodiacCard
            key={sign}
            zodiacInfo={zodiacInfo}
            onClick={() => onZodiacSelect(sign)}
          />
        );
      })}
    </div>
  );
};

export default ZodiacGrid;
