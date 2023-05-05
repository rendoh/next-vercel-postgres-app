import { Comment, CommentCreateDto } from './schemas';
import { commentSchema } from './schemas';

export async function postComment(comment: CommentCreateDto): Promise<Comment> {
  const createdComment = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  }).then((res) => res.json());

  return commentSchema.parse(createdComment);
}
