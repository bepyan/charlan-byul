declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export type Comment = {
  id: string;
  name: string;
  message: string;
  createTime: string;
};

export type CommentPost = {
  name: string;
  message: string;
  password: string;
};
