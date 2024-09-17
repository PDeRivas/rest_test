import express from 'express'
import cors from 'cors'
import router from './routes/main.js'
import dotenv from 'dotenv'

dotenv.config

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log('Api esta funcionando'))
