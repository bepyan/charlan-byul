'use client';
import { copy } from '~/libs/copy';
import { LinkIcon, ShareIcon } from './icons';
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from './popover';
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
        <PopoverTrigger className='text-gy-6 transition-colors active:text-gy-8'>
          <ShareIcon className='h-6 w-6' />
        </PopoverTrigger>
        <PopoverContent sideOffset={5} className='p-2'>
          <div
            className='flex items-center gap-2 text-xs p-2 rounded-lg transition-colors active:bg-gray-100'
            onClick={onCopy}
          >
            <div className='h-4 w-4 flex items-center justify-center'>
              <LinkIcon className='text-gy-8' />
            </div>
            링크 복사하기
          </div>
          <KakaoShare className='p-2 rounded-lg transition-colors active:bg-gray-100' />
          <PopoverArrow className='fill-white' />
        </PopoverContent>
      </Popover>
    </div>
  );
}
