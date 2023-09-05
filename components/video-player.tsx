'use client';

import { useState } from 'react';
import { VolumeOffIcon } from './icons';

export default function VideoPlayer() {
  const [muted, setMuted] = useState(true);

  const onClick = () => {
    setMuted(false);
  };

  return (
    <div className='relative w-full aspect-4/5'>
      <div className='absolute top-0 inset-x-0 -z-10 overflow-hidden'>
        <video
          className='w-full inset-0 object-cover aspect-4/5'
          preload='auto'
          loop
          autoPlay
          muted={muted}
          playsInline
          webkit-playsinline='webkit-playsinline'
        >
          <source
            src='https://velog.velcdn.com/images/bepyan/post/4b5eac52-8d8f-465f-8087-564517fa4f35/image.mp4'
            type='video/mp4'
          />
          영상을 호한하지 않는 브라우저입니다.
        </video>
      </div>
      {muted && (
        <button
          className='absolute top-4 left-4 z-1 flex gap-1 items-center px-2 py-1 rounded-lg text-xs bg-gray-50/90 active:bg-gray-100'
          onClick={onClick}
        >
          <VolumeOffIcon />
          음속어 해제
        </button>
      )}
    </div>
  );
}
