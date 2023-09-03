'use client';

import { useEffect, useState } from 'react';

export default function VideoPlayer() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMuted(false);
  }, []);

  return (
    <>
      <video
        className='w-full inset-0 object-cover aspect-4/5'
        src='https://velog.velcdn.com/images/bepyan/post/4b5eac52-8d8f-465f-8087-564517fa4f35/image.mp4'
        preload='metadata'
        muted={muted}
        loop
        autoPlay
        webkit-playsinline='webkit-playsinline'
        playsInline
      />
      {/* 위 영상 미디어는 자체 페이드 인 아웃이 있어서... */}
      {/* <audio autoPlay loop muted={muted}>
        <source
          src='https://velog.velcdn.com/images/bepyan/post/b26d5e91-fde3-4aff-b3aa-2bffcb433656/image.mp3'
          type='audio/mpeg'
        />
      </audio> */}
    </>
  );
}
