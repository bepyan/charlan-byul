'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { DownIcon } from './icons';
import { useInstaGalleryStore } from '~/libs/insta-gallery-store';

const InstalGalleryDialog = dynamic(() => import('./insta-gallery-dialog'), { ssr: false });

const SLICE_SIZE = 9;

export default function InstaGallery({ images }: { images: string[] }) {
  const [sliceIndex, setSliceIndex] = useState(1);

  const openImage = useInstaGalleryStore((state) => state.openImage);

  return (
    <>
      <div className='grid grid-cols-3 gap-1 select-none'>
        {images.slice(0, sliceIndex * SLICE_SIZE).map((image, i) => (
          <button key={i} onClick={() => openImage(i)}>
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
      <InstalGalleryDialog images={images} />
    </>
  );
}
