import { CommentPage } from './CommentPage';

export const revalidate = 0;

export default function Comments() {
  // @ts-expect-error Async Server Component
  return <CommentPage />;
}
