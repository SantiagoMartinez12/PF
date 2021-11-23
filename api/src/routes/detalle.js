const { Router } = require('express');
const { conn } = require('../db');
const {Detalle} = conn.models;



const router = Router();

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Detalle.findAll({
        attributes : ['id', 'name', 'precio', 'plato', 'estado', 'seguimiento'],
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
        const {id, name, precio, plato, estado, seguimiento, comentario} = req.body
        const newDetalle = await Detalle.create({
            id,
            name,
            precio,
            plato,
            estado,
            seguimiento,
            comentario
        })
        res.send(newDetalle) 
    }catch(error){
        next(error)
    }
});

router.put('/', async (req, res, next) =>{
    try{
        const {mesaId, id, name, precio, plato, estado, seguimiento, comentario} = req.body
        const cambiarDetail = await Detalle.update({
            mesaId: mesaId,
            name:name,
            precio:precio,
            plato:plato,
            estado:estado,
            seguimiento:seguimiento,
            comentario:comentario
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

router.delete('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Detalle.destroy({
        attributes : ['id', 'name', 'precio', 'plato', 'estado', 'seguimiento'],
        where:{
            id:id,
        }
        }) 
        res.send('se ha eliminado con exito')
    }catch(error){
        next(error)
    }
});

module.exports = router;