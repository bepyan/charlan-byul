// @ts-nocheck

'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  // ReactDOM.preconnect('https://fonts.googleapis.com');
  // ReactDOM.preconnect('https://fonts.gstatic.com', { crossOrigin: '' });
  // ReactDOM.preload(
  //   'https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400;700&family=Nanum+Myeongjo:wght@400;700&family=Noto+Sans+KR:wght@200;400;500;700&display=swap',
  //   { as: 'style' },
  // );

  // ReactDOM.preload(
  //   'https://velog.velcdn.com/images/bepyan/post/4b5eac52-8d8f-465f-8087-564517fa4f35/image.mp4',
  //   { as: 'video' },
  // );
  ReactDOM.preload(
    'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
    { as: 'image' },
  );
  ReactDOM.preload(
    'https://github.com/bepyan/charlan-byul/assets/65283190/2a6bfd15-e502-4d61-b94d-eec5758061a4',
    { as: 'image' },
  );
  ReactDOM.preload(
    'https://t1.daumcdn.net/brunch/service/user/d4v5/image/o6wwaaNlcBXNIuS2eaJojLOwEi4.jpeg',
    { as: 'image' },
  );
  ReactDOM.preload(
    'https://t1.daumcdn.net/brunch/service/user/d4v5/image/_3Sv7kwk5kNGbOd1Z_xz975esNk.gif',
    { as: 'image' },
  );

  return null;
}
