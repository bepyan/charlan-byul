/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

import useLockedBody from '~/libs/use-lock-body';
import { CloseLineIcon } from './icons/close-icon';

declare global {
  type HTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': HTMLProps & {
        init: string;
      };
      'swiper-slide': HTMLProps;
    }
  }
}

register();

const navigationStyle = `
  .swiper-button-next svg,
  .swiper-button-prev svg {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-position: center;
    background-size: 30px;
    background-repeat: no-repeat;
    padding: 8px;
    border-radius: 100%;
  }

  .swiper-button-prev {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23e5e5e5" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zm1.707-11.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 12l2.293-2.293z" clip-rule="evenodd"/></svg>');
  }
  .swiper-button-next {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%23e5e5e5" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zM10.293 9.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293z" clip-rule="evenodd"/></svg>');
  }
`;

export default function InstaGallery({ images }: { images: { src: string }[] }) {
  const swiperElRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useLockedBody(open);
  useEffect(() => {
    const swiperContainer = swiperElRef.current as any;

    Object.assign(swiperContainer, {
      spaceBetween: 30,
      navigation: true,
      pagination: {
        type: 'fraction',
      },
      grabCursor: true,
      injectStyles: [navigationStyle],
    });
    swiperContainer.initialize();
  }, []);

  const showImage = (index: number) => {
    const el = swiperElRef.current as unknown as { swiper: Swiper };
    el.swiper.slideTo(index, 0);
    setOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-1'>
        {images.map((image, i) => (
          <div key={i} className='' onClick={() => showImage(i)}>
            <img className='w-full h-full object-cover aspect-square' src={image.src} alt='' />
          </div>
        ))}
      </div>

      <div style={{ display: open ? '' : 'none' }} className='fixed inset-0 container z-10'>
        <div data-animate-fade className='absolute inset-0 bg-white'></div>
        <div className='absolute top-4 right-4 z-20'>
          <button onClick={() => setOpen(false)}>
            <CloseLineIcon className='w-6 h-6' />
          </button>
        </div>
        <swiper-container ref={swiperElRef} space-between={30} init='false'>
          {images.map((image, i) => (
            <swiper-slide
              key={i}
              data-animate-stagger
              style={{ '--stagger': 1 } as React.CSSProperties}
            >
              <img src={image.src} alt={`img-${i}`} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </>
  );
}
