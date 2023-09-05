import './global.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import HotToaster from '~/components/hot-toaster';

const config = {
  title: '김경찬 ♥ 김샛별 결혼합니다',
  description: '11월 4일 낮 12시 30분',
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    images: [
      'https://github.com/bepyan/charlan-byul/assets/65283190/a80e24cb-4501-4106-9019-5e37effc6fea',
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}

function GoogleAnalytics() {
  const ga_id = 'G-8JFGKR1B8C';

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`} />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${ga_id}');
        `}
      </Script>
    </>
  );
}
