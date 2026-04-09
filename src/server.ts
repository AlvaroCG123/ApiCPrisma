import express from 'express'
import { prisma } from '../lib/prisma.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/convidados', async (req, res) => {
  const listar = await prisma.convidado.findMany()
  return res.json(listar)
})

app.post('/convidados', async (req, res) => {
  const { nome, email, telefone} = req.body

  const criar = await prisma.convidado.create({
    data: req.body
  })
  return res.json(criar)
})

app.patch('/convidados/:id', async (req, res)=> {
  const  id  = req.params.id
  const { nome, email, telefone} = req.body

  const atualizar = await prisma.convidado.update({
    where: { id },
    data: req.body
  })

  return res.json(atualizar)
})

app.delete('/convidados/:id', async (req, res)=> {
  const  id  = req.params.id

  const deletar = await prisma.convidado.delete({
    where: { id }
  })

  return res.json(deletar)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
