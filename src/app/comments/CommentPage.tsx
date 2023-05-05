import Link from 'next/link';

import { CommentForm } from '../../features/comment/CommentForm';
import { CommentList } from '../../features/comment/CommentList';
import { getAllComments } from '../../features/comment/services';

export const CommentPage = async () => {
  const { comments } = await getAllComments();
  return (
    <main>
      <h1>Comments</h1>
      <Link href="/">HOME</Link>
      <CommentForm />
      <CommentList comments={comments} />
    </main>
  );
};
