import './global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '찬별',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
