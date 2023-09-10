'use client';

import Script from 'next/script';
import { KakaoIcon } from './cores/icons';
import { cn } from '~/libs/utils';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://charlan-byul.vercel.app/'
    : 'http://localhost:3000/';

export default function KakaoShare({ className }: { className?: string }) {
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };

  const onShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '김경찬 ♥ 김샛별 결혼합니다',
        description: '11월 4일 낮 12시 30분\n서울, 라비돌웨딩강남',
        imageUrl:
          'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
        imageWidth: 600,
        imageHeight: 450,
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
      ],
    });
  };

  return (
    <>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js'
        integrity='sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH'
        crossOrigin='anonymous'
        onLoad={kakaoInit}
      />
      <button onClick={onShare} className={cn('flex gap-2 items-center text-xs', className)}>
        <KakaoIcon className='w-4 h-4' />
        카카오톡 공유하기
      </button>
    </>
  );
}
