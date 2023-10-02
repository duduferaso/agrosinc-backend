import { PrismaClient } from '@prisma/client'
import { nodeModuleNameResolver } from 'typescript'

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.agricultor.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })