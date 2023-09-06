'use client';

import { CopyLineIcon } from './icons';
import { copy } from '~/libs/copy';

export default function CopyButton({
  className,
  iconClassName,
  text,
}: {
  className?: string;
  iconClassName?: string;
  text: string;
}) {
  return (
    <button
      className={'transition-opacity active:opacity-60 ' + className ? className : ''}
      onClick={() => copy(text)}
    >
      <CopyLineIcon className={iconClassName} />
    </button>
  );
}
