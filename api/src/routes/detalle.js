const { Router } = require('express');
const { conn } = require('../db');
const {Detalle} = conn.models;

//dhewetetty

const router = Router();

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Detalle.findAll({
        attributes : ['id', 'namecliente', 'precio', 'name', 'estado', 'seguimiento', 'cantidad'],
        where:{
            id:id,
        }
        }) 
        res.send(detalle)
    }catch(error){
        next(error)
    }
});

router.post('/', async (req, res, next) =>{
    try{
        const data = req.body
        console.log(data)
        const newDetalle = await data.forEach(async(register)=>{
            await Detalle.create({
            mesaId: register.idMesa,
            namecliente: register.nameCliente,
            precio: register.precio,
            name: register.name,
            estado: register.estado,
            seguimiento: register.seguimiento,
            comentario: register.comentario,
            cantidad: register.cantidad,
            clienteId: register.idCliente
        })})
        res.send(newDetalle) 
        console.log()
    }catch(error){
        next(error)
    }
});

router.put('/', async (req, res, next) =>{
    try{
        const {mesaId, id, namecliente, precio, name, estado, seguimiento, comentario, cantidad} = req.body
        const cambiarDetail = await Detalle.update({
            
            namecliente:namecliente,
            precio:precio,
            name:name,
            estado:estado,
            seguimiento:seguimiento,
            comentario:comentario,
            cantidad:cantidad
        },{
            where:{
                id:id
            }
        })
        res.send('su detalle se ha cambiado con exito') 
    }catch(error){
        next(error)
    }
});
router.put('/seguimiento/', async (req, res, next) =>{
    try{
        const {id, seguimiento} = req.body
        console.log(id,seguimiento)
        const cambiarSeguimiento = await Detalle.update({
            
            seguimiento:seguimiento,
            
        },{
            where:{
                id:id
            }
        })
        res.send('su seguimiento se ha cambiado con exito') 
    }catch(error){
        next(error)
    }
});

router.delete('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Detalle.destroy({
        where:{
            id:id,
        }
        }) 
        res.send('se ha eliminado con exito')
    }catch(error){
        next(error)
    }
});
router.get('/idcliente/:idCliente', async (req, res, next) =>{
    
    try{
        const {idCliente} = req.params;
       
        const detalle = await Detalle.findAll({
        attributes : ['id', 'namecliente', 'precio', 'name', 'estado', 'seguimiento', 'cantidad', 'clienteId'],
        where:{
            clienteId:idCliente,
        }
        }) 
        console.log(detalle)
        res.send(detalle)
    }catch(error){
        next(error)
    }
});

module.exports = router;