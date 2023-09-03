'use client';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

import { Dialog, DialogContent, DialogTrigger } from '~/components/cores/dialog';
import { CloseLineIcon, DownIcon } from './icons';

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

const SLICE_SIZE = 9;

export default function InstaGallery({ images }: { images: { src: string }[] }) {
  const [sliceIndex, setSliceIndex] = useState(1);
  const [sliderIndex, setSliderIndex] = useState(0);

  const showImage = (index: number) => {
    setSliderIndex(index);
  };

  return (
    <Dialog>
      <div className='grid grid-cols-3 gap-1'>
        {images.slice(0, sliceIndex * SLICE_SIZE).map((image, i) => (
          <DialogTrigger key={i} onClick={() => showImage(i)}>
            <img className='w-full h-full object-cover aspect-square' src={image.src} alt='' />
          </DialogTrigger>
        ))}
      </div>
      <div className='mt-4 flex items-center justify-center'>
        {images.length > sliceIndex * SLICE_SIZE && (
          <button
            className='p-4 transition-opacity active:opacity-60'
            onClick={() => setSliceIndex(sliceIndex + 1)}
          >
            <DownIcon className='text-gy-8' />
          </button>
        )}
      </div>
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
