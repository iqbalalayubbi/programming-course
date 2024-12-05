import { Prisma } from '@prisma/client';

const getPrismaError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return error.code;
  }
};

export { getPrismaError };
