import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from '~/libs/firebase';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const body = (await req.json()) as { password: string };
  const docSnap = await getDoc(doc(db, 'comments', params.id));

  if (docSnap.exists()) {
    const data = docSnap.data();

    if (data.password === body.password) {
      await deleteDoc(doc(db, 'comments', params.id));
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: '비밀번호를 잘못 입력했습니다.' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: '찾을 수 없는 댓글입니다.' }, { status: 400 });
  }
}
