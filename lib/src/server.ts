import express from 'express';
import { prisma } from '../prisma.js';

const app = express();
const PORT = 3000
app.use(express.json());

app.get('/', (req, res) => {
  return res.send("O servidor está rodando perfeitamente!");
});

app.get('/teste', async (req, res) => {
  const users = await prisma.convidado.findMany();
  return res.json(users);
});

app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta {PORT}`));