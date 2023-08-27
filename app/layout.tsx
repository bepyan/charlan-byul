import HotToaster from '~/components/hot-toaster';
import './global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '찬란별',
  description: '',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className='font-serif'>
        {children}
        <HotToaster />
      </body>
    </html>
  );
}
