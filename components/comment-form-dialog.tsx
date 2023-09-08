'use client';

import { useCommentStore } from '~/libs/comment-store';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './cores/dialog';
import Input from './cores/input';
import Textarea from './cores/textarea';
import { SendIcon } from './cores/icons';
import { useState } from 'react';
import { CommentPost } from '~/libs/types';
import Button from './cores/button';
import { toast } from 'react-hot-toast';

export default function CommentFormDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const commentAPI = useCommentStore((state) => state.api);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) return;
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      password: { value: string };
      message: { value: string };
    };

    const comment: CommentPost = {
      name: !!target.name.value ? target.name.value : '익명',
      password: target.password.value,
      message: target.message.value.replace(/\n\r?/g, '\n\r'),
    };

    if (!comment.message) {
      toast.error('메시지 내용을 작성해주세요.');
      return;
    }

    setLoading(true);
    await toast.promise(commentAPI.post(comment), {
      loading: '요청중...',
      success: '성공했습니다.',
      error: '실패했습니다.',
    });
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='inline-flex items-center justify-center gap-1 text-xs border rounded-full px-4 py-2 transition-colors active:bg-gray-50 select-none'>
        <SendIcon />
        보내기
      </DialogTrigger>
      <DialogContent className='w-10/12 rounded-lg border'>
        <DialogTitle className='p-4'>축하 메시지</DialogTitle>
        <div className='px-4 pb-4'>
          <form className='' onSubmit={(e) => onSubmit(e)}>
            <div className='flex gap-3'>
              <Input disabled={loading} name='name' placeholder='이름' className='flex-[1]' />
              <Input
                disabled={loading}
                name='password'
                type='password'
                placeholder='비밀번호'
                className='flex-[2]'
              />
            </div>
            <Textarea
              disabled={loading}
              name='message'
              className='mt-3 resize-none'
              placeholder='메시지를 작성 해주세요.'
            />
            <div className='mt-3 flex items-center gap-2'>
              <button
                disabled={loading}
                type='button'
                onClick={() => setOpen(false)}
                className='flex-1'
              >
                취소
              </button>
              <Button disabled={loading} type='submit' className='flex-[2]'>
                보내기
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
