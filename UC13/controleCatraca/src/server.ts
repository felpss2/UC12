import * as express from 'express';
import * as bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import * as path from 'path';

const app = express();
const prisma = new PrismaClient();

// Ajuste o caminho para a pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-cliente', async (req, res) => {
    const { nome, cpf } = req.body;
    const horarioEntrada = new Date();
    const horarioSaida = new Date();

    try {
        const newCliente = await prisma.cliente.create({
            data: {
                nome,
                cpf,
                horarioEntrada,
                horarioSaida,
            },
        });
        res.status(200).json({ message: 'Cliente criado com sucesso!', cliente: newCliente });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
