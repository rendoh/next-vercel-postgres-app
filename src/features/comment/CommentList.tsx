import { FC } from 'react';

import { Comment } from './schemas';

export type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment.id}>
        <p>{comment.content}</p>
        <p>
          {comment.createdAt.getFullYear()}/{comment.createdAt.getMonth() + 1}/
          {comment.createdAt.getDate()}
        </p>
      </li>
    ))}
  </ul>
);
