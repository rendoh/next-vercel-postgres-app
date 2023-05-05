import { z } from 'zod';

export const commentCreateSchema = z.object({
  content: z.string().min(1).max(255),
});

export type CommentCreateDto = z.infer<typeof commentCreateSchema>;

export const commentSchema = commentCreateSchema.extend({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
});

export type Comment = z.infer<typeof commentSchema>;
