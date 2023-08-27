'use client';

import { useState } from 'react';
import { ArrowDownIcon } from './icons';

export default function Accordion({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={'text-sm border rounded-lg overflow-hidden ' + (className ? className : '')}>
        <div
          className='px-4 py-3 bg-gray-50 transition-colors active:bg-gray-100 flex items-center justify-between'
          onClick={() => setOpen(!open)}
        >
          {title}
          <ArrowDownIcon
            className={'text-gy-6 transition-transform ' + (open ? 'rotate-180' : 'rotate-0')}
          />
        </div>
        <div
          className={'overflow-hidden transition-all ' + (open ? 'border-t' : '')}
          style={{ maxHeight: open ? '80px' : 0 }}
        >
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </div>
  );
}
