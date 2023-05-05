import { CommentPage } from './CommentPage';

export const revalidate = 30;

export default function Comments() {
  // @ts-expect-error Async Server Component
  return <CommentPage />;
}
