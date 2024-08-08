import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let cliente: Prisma.clienteDeleteArgs
  
    const deleteCliente = await prisma.cliente.delete({ where: {id: 3}});
}

main()
