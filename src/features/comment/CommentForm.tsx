'use client';

import { useRouter } from 'next/navigation';
import { FC, FormEvent, useCallback, useState } from 'react';

import { postComment } from './api';

export const CommentForm: FC = () => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const mutate = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        await postComment({ content: comment });
        setComment('');
        router.refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [comment, router],
  );
  return (
    <div>
      <h2>Post comment</h2>
      <form onSubmit={mutate}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
        />
        <button disabled={isSubmitting} type="submit">
          post
        </button>
      </form>
    </div>
  );
};
