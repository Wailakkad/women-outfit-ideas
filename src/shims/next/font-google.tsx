export function Playfair_Display(options?: {
  subsets?: string[];
  variable?: string;
  weight?: string | string[];
}) {
  return {
    className: 'font-serif',
    variable: options?.variable || '--font-playfair',
  };
}

export function Inter(options?: {
  subsets?: string[];
  variable?: string;
  weight?: string | string[];
}) {
  return {
    className: 'font-sans',
    variable: options?.variable || '--font-inter',
  };
}

export function Plus_Jakarta_Sans(options?: {
  subsets?: string[];
  variable?: string;
  weight?: string | string[];
}) {
  return {
    className: 'font-sans',
    variable: options?.variable || '--font-plus-jakarta',
  };
}
