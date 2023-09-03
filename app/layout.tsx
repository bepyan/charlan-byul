import HotToaster from '~/components/hot-toaster';
import './global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '김경찬 ♥ 김샛별 결혼합니다',
  description: '11월 4일 낮 12시 30분',
  openGraph: {
    images: [
      'https://github.com/bepyan/charlan-byul/assets/65283190/a80e24cb-4501-4106-9019-5e37effc6fea',
    ],
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: false,
    follow: false,
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
