import { Router } from 'express';
import { empleadoModel } from '../models/empleado.js';

export const empleadoRouter = Router();

// agregar empleaod nuevo 

empleadoRouter.post('/agregar', (req, res)=> {
    empleadoModel.create(req.body).then(data => {
        console.log('Se insertó un empleado');
        res.send(data);
    }).catch(error => {
        console.log('error', error)
    })
});

empleadoRouter.get('/empleados', (req, res) =>{
    empleadoModel.find()
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error(error);
    })
});

empleadoRouter.get('/empleado/:id', (req, res)=> {
    empleadoModel.findById(req.params.id)
    .then(data => {
        console.log('Se actualizó el empleado')
        res.send(data);
    })
    .catch(error => {
        console.error(error);
    })
})

empleadoRouter.put('/actualizar/:id', (req, res) => {
    empleadoModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }).then(data => {
        console.log(data);
        res.send(data);
    })
    .catch(error => {
        console.error(error);
    })
});

empleadoRouter.delete('/eliminar/:id', (req, res) => {
    empleadoModel.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se elimnó  el empleado');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
});
