import { create } from 'zustand';
import { Comment, CommentPost } from './types';
import { compareDesc } from 'date-fns';

type CommentStore = {
  list: Comment[];
  api: {
    request: () => Promise<void>;
    post: (comment: CommentPost) => Promise<void>;
    delete: (commentId: string, password: string) => Promise<{ error?: string }>;
  };
};

export const useCommentStore = create<CommentStore>((set) => ({
  list: [],
  api: {
    request: async () => {
      set((state) => ({ ...state, loading: true }));

      await fetch('/api/comments')
        .then((res) => res.json())
        .then((res) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(res.data);
          }

          const data: { list: Comment[] } = res.data;

          set((state) => ({
            ...state,
            list: data.list.sort((a, b) =>
              compareDesc(new Date(a.createTime), new Date(b.createTime)),
            ),
          }));
        })
        .catch((e) => console.log(e));
    },
    post: async (comment) => {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
      })
        .then((res) => res.json())
        .then(({ data }) => {
          set((state) => ({
            ...state,
            list: [data, ...state.list],
          }));
        })
        .catch(() => {});
    },
    delete: async (commentId, password) => {
      return await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            set((state) => ({
              ...state,
              list: state.list.filter((item) => item.id !== commentId),
            }));
          }
          return data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
}));
