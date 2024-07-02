import { PrismaClient } from '@prisma/client'
// import { readReplicas } from '@prisma/extension-read-replicas'

export default new PrismaClient()
// .$extends(
//   readReplicas({
//     url: process.env.DATABASE_URL
//   } as any)
// )
