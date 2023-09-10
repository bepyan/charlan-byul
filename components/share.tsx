'use client';
import { copy } from '~/libs/copy';
import { LinkIcon, ShareIcon } from './cores/icons';
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from './cores/popover';
import KakaoShare from './share-kakao';
import { useState } from 'react';

export default function Share() {
  const [open, setOpen] = useState(false);

  const onCopy = () => {
    copy('https://charlan-byul.vercel.app/');
    setOpen(false);
  };

  return (
    <div>
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
          <KakaoShare className='p-2 rounded-lg transition-colors active:bg-gray-100 focus:outline-none' />
          <PopoverArrow className='fill-white' />
        </PopoverContent>
      </Popover>
    </div>
  );
}
