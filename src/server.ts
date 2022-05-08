import express from 'express'
import cors from 'cors'
import { routes } from './routes'

import { config } from 'dotenv'
config({path: '../.env'})

const app = express()

app.use(cors({
  origin: process.env.URL_FRONTEND || '*'
}))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server started on port ${process.env.PORT || 3333}`)
})

// Proteger a API de outros front-ends aleatórios
// app.use(cors({
//   origin: 'URL DO FRONT-END'
// }))


// Informações sobre requisições
// GET, POST, PUT, DELETE
// GET = Buscar informações.
// POST = Criar informações.
// PUT = Atualizar informações de uma entidade.
// PATCH = Atualizar uma informação única de uma entidade.
// DELETE = Deletar uma informações.