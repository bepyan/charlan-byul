'use client';

import { useEffect, useRef } from 'react';
import { cn } from '~/libs/utils';

export interface IntersectProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * `data-animate` 은 `data-animate-stage` 속성을 통해 자식 등장 애니메이션을 제어
   *
   * `data-animate-layer` 은 자동으로 자식 순으로 제어
   */
  type?: 'data-animate' | 'data-animate-layer';
}

export default function Intersect({
  type = 'data-animate-layer',
  className,
  ...props
}: IntersectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.setAttribute(type, '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -20% 0px' },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [type]);

  return <div ref={ref} className={cn('opacity-0', className)} {...props}></div>;
}
