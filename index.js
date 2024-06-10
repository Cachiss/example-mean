import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { empleadoRouter } from './routes/empleado.routes.js';

const PORT = 3005;

// conexion a la base de datos
mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/9no-web-2doparcial-practica')
    .then((x) => {
        console.log('Conectado exitosamente a la base de datos', x.connections[0].name);
    })
    .catch((error)=> {
        console.error('Error en la conexión', error.reason)
    })



const app = express();
app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', empleadoRouter);


// manejador de errores 

app.use(function (err, req, res, next){
    console.log(err.message);
    if(!err.statusCode) err.StatusCode = 500;
    res.status(err.statusCode).send(err.message);
})
app.listen(process.env.PORT || PORT, ()=> {
    console.log('Servidor corriendo en', PORT);
})
