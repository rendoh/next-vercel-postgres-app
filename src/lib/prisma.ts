import 'server-only';

import { PrismaClient } from '@prisma/client';

/**
 * FYI: https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
 */

function createClient() {
  return new PrismaClient();
}

const globalForPrisma = global as unknown as {
  prisma?: ReturnType<typeof createClient>;
};

export const prisma = globalForPrisma.prisma || createClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
