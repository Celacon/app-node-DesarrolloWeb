import express from "express";
import cors from 'cors';
import db from './database/db.js';
import blogRoutes from './routes/routes.js';

const app = express()

app.use( cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es:${error}`)
}
/*
app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})*/

app.listen(8000,'172.26.12.27', () => {
    console.log('Server UP running in http://172.26.12.27:8000/')
})
  