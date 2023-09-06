'use client';

import { copy } from '~/libs/copy';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { MapPointIcon } from './icons';

export default function MapInfo() {
  const place = '서울 강남구 논현로79길 72';

  return (
    <div className='relative'>
      <p>
        {place}
        <br />
        라비돌웨딩강남 2F 오뗄홀
      </p>
      <p className='mt-2 text-xs text-gy-8'>02-538-3300</p>
      <div className='absolute top-0 right-0'>
        <DropdownMenu>
          <DropdownMenuTrigger className='p-2 rounded-full transition-opacity active:opacity-60'>
            <MapPointIcon className='h-6 w-6 text-gy-6' />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='text-xs'>
            <DropdownMenuItem onSelect={() => copy(place)}>주소 복사하기</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.open('https://naver.me/55R8LihG', '_blank')}>
              네이버 맵
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => window.open('https://kko.to/bE8LIZYsA8', '_blank')}>
              카카오 맵
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
