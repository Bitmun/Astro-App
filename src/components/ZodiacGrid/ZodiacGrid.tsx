import { zodiacSigns } from '../../data/zodiacData';
import { ZodiacCard } from '../ZodiacCard/ZodiacCard';

import { ZodiacGridProps } from './type';

const ZodiacGrid = ({ onZodiacSelect }: ZodiacGridProps) => {
  return (
    <div>
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
