'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './cores/dialog';
import { CloseLineIcon } from './icons';
import Input from './cores/input';
import Button from './cores/button';
import { useCommentStore } from '~/libs/comment-store';
import { Comment } from '~/libs/types';
import { toast } from 'react-hot-toast';

export default function CommentDeleteDialog({ targetComment }: { targetComment: Comment }) {
  const commentAPI = useCommentStore((state) => state.api);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmitDeleteComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const password = (e.target as any).password.value;

    setLoading(true);
    const toastId = toast.loading('요청중...');
    const { error } = await commentAPI.delete(targetComment.id, password);
    setLoading(false);

    if (!error) {
      toast.success('삭제되었습니다.', { id: toastId });
    } else {
      toast.error(error ?? '실패했습니다', { id: toastId });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='ml-1'>
        <CloseLineIcon className='w-3 h-3' />
      </DialogTrigger>
      <DialogContent className='w-10/12 rounded-lg border'>
        <DialogTitle className='p-4'>메시지 제거</DialogTitle>
        {targetComment && (
          <form onSubmit={onSubmitDeleteComment} className='px-4 pb-4'>
            <Input disabled={loading} name='password' type='password' placeholder='비밀번호' />
            <div className='mt-3 flex gap-2'>
              <button
                disabled={loading}
                type='button'
                onClick={() => setOpen(false)}
                className='flex-1'
              >
                취소
              </button>
              <Button disabled={loading} type='submit' className='flex-[2]'>
                확인
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
