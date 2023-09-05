'use client';

import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { ArrowLeftIcon, ArrowRightIcon, CloseLineIcon, DownIcon } from './icons';
import { cn } from '~/libs/utils';
import { createPortal } from 'react-dom';

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

const SLICE_SIZE = 9;

export default function InstaGallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [sliceIndex, setSliceIndex] = useState(1);
  const [sliderIndex, setSliderIndex] = useState(0);

  const showImage = (index: number) => {
    setSliderIndex(index);
    setOpen(true);
  };

  const moveSlide = (targetIndex: number) => {
    if (0 > targetIndex || targetIndex >= images.length) {
      return;
    }

    setSliderIndex(targetIndex);
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-1 select-none'>
        {images.slice(0, sliceIndex * SLICE_SIZE).map((image, i) => (
          <button key={i} onClick={() => showImage(i)}>
            <img
              className='w-full h-full object-cover aspect-square pointer-events-none'
              src={`https://img1.daumcdn.net/thumb/R400x0.fjpg/?fname=${image}`}
              alt=''
            />
          </button>
        ))}
      </div>
      <div className='mt-8 flex items-center justify-center'>
        {images.length > sliceIndex * SLICE_SIZE && (
          <button
            className='px-4 py-2 border rounded-full flex items-center gap-1 text-xs transition-colors active:bg-gray-50'
            onClick={() => setSliceIndex(sliceIndex + 1)}
          >
            <DownIcon className='text-gy-6' />
            사진 더보기
          </button>
        )}
      </div>
      {createPortal(
        <RemoveScroll enabled={open} removeScrollBar allowPinchZoom>
          <div
            className={cn(
              !open && 'hidden',
              'z-50 w-full h-full fixed inset-0 overflow-hidden bg-white/90 backdrop-blur',
            )}
          >
            {/* 슬라이더 */}
            <div
              className='flex items-center flex-shrink-0 select-none'
              style={{ transform: `translateX(-${window.innerWidth * sliderIndex}px)` }}
            >
              {images.map((image, i) => (
                <div key={i} className='w-full flex-shrink-0'>
                  <img src={image} alt={`img-${i}`} className='pointer-events-none' />
                </div>
              ))}
            </div>
            {/* 인디케이터 */}
            <div className='flex items-center justify-center gap-2 py-2'>
              <button
                disabled={sliderIndex === 0}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  sliderIndex === 0 ? 'disabled:opacity-40' : 'active:bg-gray-200',
                )}
                onClick={() => moveSlide(sliderIndex - 1)}
              >
                <ArrowLeftIcon className='h-8 w-8' />
              </button>
              <button
                className='p-2 rounded-full transition-colors active:bg-gray-200'
                onClick={() => setOpen(false)}
              >
                <CloseLineIcon className='h-6 w-6' />
              </button>
              <button
                disabled={sliderIndex === images.length - 1}
                className='p-2 rounded-full transition-colors active:bg-gray-200 disabled:opacity-50'
                onClick={() => moveSlide(sliderIndex + 1)}
              >
                <ArrowRightIcon className='h-8 w-8' />
              </button>
            </div>
          </div>
        </RemoveScroll>,
        document.body,
      )}
    </>
  );
}
