'use client';

import Script from 'next/script';
import { cn } from '~/libs/utils';

const CLIENT_ID = 'n1j7i4ygpn';

export default function NaverMap({ className }: { className?: string }) {
  const lot = 37.4960815506362;
  const lat = 127.0327627846199;

  const initMap = () => {
    const position = new window.naver.maps.LatLng(lot, lat);

    const map = new window.naver.maps.Map('naver-map', {
      center: position,
      zoom: 15,
    });

    new window.naver.maps.Marker({
      position: position.destinationPoint(90, 15),
      map,
    });
  };

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`}
        onLoad={initMap}
      />
      <div className={cn('relative', className)}>
        <div id='naver-map' className='z-10 w-full h-full'></div>
        <div className='z-0 absolute inset-0 animate-pulse bg-gray-200'></div>
      </div>
    </>
  );
}
