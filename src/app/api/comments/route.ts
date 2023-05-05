import { NextResponse } from 'next/server';

import { commentCreateSchema } from '../../../features/comment/schemas';
import { createComment } from '../../../features/comment/services';

export async function POST(req: Request) {
  const parsed = commentCreateSchema.safeParse(await req.json());
  if (parsed.success) {
    const comment = await createComment(parsed.data.content);
    return NextResponse.json(comment, {
      status: 201,
    });
  }
  return NextResponse.json(parsed.error, {
    status: 400,
  });
}
