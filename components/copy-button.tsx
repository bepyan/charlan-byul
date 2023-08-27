'use client';

import { toast } from 'react-hot-toast';
import { CopyLineIcon } from './icons';

export default function CopyButton({ className, text }: { className?: string; text: string }) {
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast(() => (
        <div>
          <p>
            <b>복사완료</b>
          </p>
          <p>{text}</p>
        </div>
      ));
    } catch (e) {
      alert('클립보드 복사에 실패했습니다.');
    }
  };

  return (
    <button
      className={'transition-opacity active:opacity-60 ' + className ? className : ''}
      onClick={onClick}
    >
      <CopyLineIcon />
    </button>
  );
}
