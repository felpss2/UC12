import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let cliente: Prisma.clienteCreateInput;
  
    // Check if posts should be included in the query
     cliente = {
        id_cliente: 5,
        nome: "Cleberson",     
        cnh: 111311113,
      }
    // Pass 'user' object into query
    const createCliente = await prisma.cliente.create({ data: cliente })
}

main()