// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalForPrisma = globalThis as any

let prisma: any

try {
  const { PrismaClient } = require('@prisma/client')
  prisma = globalForPrisma.prisma || new PrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
} catch {
  prisma = null
}

export { prisma }
export default prisma
