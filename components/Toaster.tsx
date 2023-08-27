'use client';
import { Toaster as HotToaster } from 'react-hot-toast';

export default function Toaster() {
  return (
    <HotToaster
      toastOptions={{
        className: 'text-xs',
        style: {
          backdropFilter: 'blur(16px)',
          filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 10px)',
          background: 'rgba(255, 255, 255, 0.7)',
        },
        position: 'top-center',
      }}
    />
  );
}
