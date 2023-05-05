import { CommentPage } from './CommentPage';

export default function Comments() {
  // @ts-expect-error Async Server Component
  return <CommentPage />;
}
