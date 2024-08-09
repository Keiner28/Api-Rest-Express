import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
// middleware de CORS para permitir peticiones desde los siguientes orígenes sino agregamos el origin permitirá cualquier origen con '*'
// para ello especificamos un array con los orígenes permitidos y si el origen no está en el array lanzamos un error

app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
