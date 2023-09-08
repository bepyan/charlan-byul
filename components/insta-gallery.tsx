'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { DownIcon } from './cores/icons';
import { useInstaGalleryStore } from '~/libs/insta-gallery-store';
import Intersect from './cores/intersect';
import { cn } from '~/libs/utils';

const InstalGalleryDialog = dynamic(() => import('./insta-gallery-dialog'), { ssr: false });

const SLICE_SIZE = 9;

export default function InstaGallery({ images }: { images: string[] }) {
  const [sliceIndex, setSliceIndex] = useState(1);

  const openImage = useInstaGalleryStore((state) => state.openImage);

  useEffect(() => {
    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url;
        loadImg.onload = () => resolve(url);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map(loadImage))
      .then(() => console.log('finish load images'))
      .catch((err) => console.log('fail load images', err));
  }, [images]);

  const onClickMore = () => {
    setSliceIndex(sliceIndex + 1);
  };

  Math.floor(images.length / SLICE_SIZE);

  return (
    <>
      <Intersect className='grid grid-cols-3 gap-1 select-none'>
        {images.slice(0, sliceIndex * SLICE_SIZE).map((image, i) => (
          <button
            key={i}
            data-animate-stage={(i % SLICE_SIZE) + 1}
            style={{ '--delay': '30ms' } as React.CSSProperties}
            onClick={() => openImage(i)}
          >
            <img
              className='w-full h-full object-cover aspect-square pointer-events-none'
              src={`https://img1.daumcdn.net/thumb/R400x0.fjpg/?fname=${image}`}
              alt=''
            />
          </button>
        ))}
      </Intersect>
      <div className='mt-8 flex items-center justify-center'>
        {images.length > sliceIndex * SLICE_SIZE && (
          <button
            id='more-btn'
            className='px-4 py-2 border rounded-full flex items-center gap-1 text-xs transition-colors active:bg-gray-50'
            onClick={onClickMore}
          >
            <DownIcon className='text-gy-6' />
            사진 더보기
          </button>
        )}
      </div>
      <InstalGalleryDialog images={images} />
    </>
  );
}
