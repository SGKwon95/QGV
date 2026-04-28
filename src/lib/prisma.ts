// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalForPrisma = globalThis as any

export const prisma = globalForPrisma.prisma || new (require('@prisma/client').PrismaClient)()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
