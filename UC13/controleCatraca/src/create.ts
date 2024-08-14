import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let cliente: Prisma.clienteCreateInput;
  
    // Check if posts should be included in the query
      cliente = {
        
        nome: 'renato cariri',
        cpf: '33333333333',
        horarioEntrada: new Date('2024-07-11T00:00:00.000Z'), 
        horarioSaida: new Date('2024-07-11T00:00:00.000Z')
       

      }
    // Pass 'user' object into query
    const createCliente = await prisma.cliente.create({ data: cliente })
}

main()