import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  // Check if posts should be included in the query
  // lt: menor que, lte: menor e igual, gt: maior que, gte maior e igual
  const criterion = {where:{id_carro: {lte: 4}}} 
  const users = await prisma.carro.findMany(criterion);
  console.table(users);
}

main()