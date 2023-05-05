import { prisma } from '../../lib/prisma';

export async function createComment(content: string) {
  return prisma.comment.create({
    data: {
      content,
    },
  });
}

export async function getAllComments() {
  const [count, comments] = await prisma.$transaction([
    prisma.comment.count(),
    prisma.comment.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    }),
  ]);

  return {
    count,
    comments,
  };
}
