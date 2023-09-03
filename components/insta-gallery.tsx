'use client';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

import { Dialog, DialogContent, DialogTrigger } from '~/components/cores/dialog';
import { CloseLineIcon } from './icons';

declare global {
  type HTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': HTMLProps & {
        init?: string;
      };
      'swiper-slide': HTMLProps;
    }
  }
}

register();

export default function InstaGallery({ images }: { images: { src: string }[] }) {
  const [showMore, setShowMore] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const showImage = (index: number) => {
    setSliderIndex(index);
  };

  return (
    <Dialog>
      <div className='grid grid-cols-3 gap-1'>
        {images.slice(...(showMore ? [0] : [0, 9])).map((image, i) => (
          <DialogTrigger key={i} onClick={() => showImage(i)}>
            <img className='w-full h-full object-cover aspect-square' src={image.src} alt='' />
          </DialogTrigger>
        ))}
      </div>
      {!showMore && (
        <div className='mt-4 flex justify-center'>
          <button className='text-sm' onClick={() => setShowMore(true)}>
            더 보기
          </button>
        </div>
      )}
      <DialogContent className='w-full h-full'>
        <SwiperContainer images={images} sliderIndex={sliderIndex} />
      </DialogContent>
    </Dialog>
  );
}

const SwiperContainer = ({
  sliderIndex,
  images,
}: {
  sliderIndex: number;
  images: { src: string }[];
}) => {
  const swiperElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current as any;

    if (swiperContainer) {
      Object.assign(swiperContainer, {
        spaceBetween: 30,
        navigation: false,
        pagination: {
          type: 'fraction',
        },
        grabCursor: true,
      });
      swiperContainer.initialize();
      swiperContainer.swiper.slideTo(sliderIndex, 0);
    }
  }, [sliderIndex]);

  return (
    <swiper-container ref={swiperElRef} init='false'>
      {images.map((image, i) => (
        <swiper-slide key={i}>
          <img src={image.src} alt={`img-${i}`} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};
