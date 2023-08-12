import './global-style.css';
import 'node_modules/modern-normalize/modern-normalize.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

const notoSans = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '찬별',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
