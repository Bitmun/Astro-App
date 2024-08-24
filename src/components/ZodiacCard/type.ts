export interface ZodiacCardProps {
  zodiacInfo: {
    sign: string;
    period: string;
    logo: string;
  };
  onClick: () => void;
}
