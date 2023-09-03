'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMuted(false);
  }, []);

  useEffect(() => {
    const play = () => {
      try {
        if (videoRef.current?.isConnected) {
          videoRef.current.play();
        }
      } catch (e) {}
    };

    const autoplay = () => {
      setInterval(() => {
        play();
      }, 1000);
    };

    autoplay();
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className='w-full inset-0 object-cover aspect-4/5'
        src='https://velog.velcdn.com/images/bepyan/post/4b5eac52-8d8f-465f-8087-564517fa4f35/image.mp4'
        preload='metadata'
        muted={muted}
        loop
        autoPlay
        webkit-playsinline='webkit-playsinline'
        playsInline
      />
      <div className='mx-2 my-1 font-sans font-thin text-[11px] text-gy-9'>
        * 자동으로 재생되는 동영상입니다.
      </div>
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
