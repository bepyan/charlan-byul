import { toast } from 'react-hot-toast';

export const copy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast(() => (
      <div className='min-w-[200px]'>
        <p className='text-sm'>
          <b>복사완료</b>
        </p>
        <p className='text-xs'>{text}</p>
      </div>
    ));
  } catch (e) {
    alert('클립보드 복사에 실패했습니다.');
  }
};
