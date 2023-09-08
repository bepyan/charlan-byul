import { Noto_Sans_KR, Nanum_Myeongjo, Cormorant_SC } from 'next/font/google';
import { cn } from '~/libs/utils';

const sans = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Nanum_Myeongjo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const serif_en = Cormorant_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif-en',
});

export const fontVariable = cn(sans.variable, serif.variable, serif_en.variable);
