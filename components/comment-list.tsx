'use client';

import { format } from 'date-fns';
import { LoadingLoopIcon } from './icons';
import { useEffect, useState } from 'react';
import { useCommentStore } from '~/libs/comment-store';
import CommentDeleteDialog from './comment-delete-dialog';

export default function CommentList() {
  const [loadingList, setLoadingList] = useState(false);
  const commentList = useCommentStore((state) => state.list);
  const commentAPI = useCommentStore((state) => state.api);

  useEffect(() => {
    setLoadingList(true);
    commentAPI.request().then(() => {
      setLoadingList(false);
    });
  }, [commentAPI]);

  return (
    <div>
      {loadingList && (
        <div className='pt-8 flex justify-center'>
          <LoadingLoopIcon className='w-5 h-5 text-gy-6' />
        </div>
      )}
      {!loadingList && (
        <div className='pl-8 pr-6 text-sm'>
          {commentList.map((comment) => (
            <div key={comment.id} className='py-4 border-b'>
              <div className='text-sm text-gy-6 flex'>
                <span>{comment.name}</span>
                <span className='ml-auto font-light text-[12px]'>
                  {format(new Date(comment.createTime), 'yy.MM.dd')}
                </span>
                <CommentDeleteDialog targetComment={comment} />
              </div>
              <div className='mt-1 whitespace-pre-line'>{comment.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
