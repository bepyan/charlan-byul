'use client';
import { copy } from '~/libs/copy';
import { KakaoIcon, LinkIcon, ShareIcon } from './cores/icons';
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from './cores/popover';
import { useState } from 'react';
import Script from 'next/script';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://charlan-byul.vercel.app/'
    : 'http://localhost:3000/';

export default function Share() {
  const [open, setOpen] = useState(false);

  const onCopy = () => {
    copy('https://charlan-byul.vercel.app/');
    setOpen(false);
  };

  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };

  const kakaoSend = (image: { imageUrl: string; imageWidth: number; imageHeight: number }) => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        ...image,
        title: '김경찬 ♥ 김샛별 결혼합니다',
        description: '11월 4일 낮 12시 30분\n서울, 라비돌웨딩강남',
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

  const kakaoShareCard = () => {
    kakaoSend({
      imageUrl:
        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
      imageWidth: 600,
      imageHeight: 450,
    });
  };

  const kakaoShareStudio = () => {
    kakaoSend({
      imageUrl:
        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/cFKet8d-2BY7ofkiLYNaSr_mCog.jpeg',
      imageWidth: 480,
      imageHeight: 720,
    });
  };

  return (
    <div>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js'
        integrity='sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH'
        crossOrigin='anonymous'
        onLoad={kakaoInit}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className='text-gy-8 transition-colors active:text-gy-9'>
          <ShareIcon className='h-6 w-6' />
        </PopoverTrigger>
        <PopoverContent sideOffset={5} className='p-2'>
          <button
            className='w-full flex items-center gap-2 text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none'
            onClick={onCopy}
          >
            <div className='h-4 w-4 flex items-center justify-center'>
              <LinkIcon className='text-gy-8' />
            </div>
            링크 복사하기
          </button>
          <button
            onClick={kakaoShareCard}
            className='w-full flex gap-2 items-center text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none'
          >
            <KakaoIcon className='w-4 h-4' />
            <span>(초대장 버전) 공유하기</span>
          </button>
          <button
            onClick={kakaoShareStudio}
            className='w-full flex gap-2 items-center text-xs p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none'
          >
            <KakaoIcon className='w-4 h-4' />
            <span>(사진 버전) 공유하기</span>
          </button>
          <PopoverArrow className='fill-white' />
        </PopoverContent>
      </Popover>
    </div>
  );
}
