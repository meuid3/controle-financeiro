import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const createUser = await prisma.user.create({
    data: {
      name: "Marcos Moraes Pereira",
      email: "meuid3@gmail.com"
    }
  })

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}