const { Router } = require('express');
const { conn } = require('../db');
const {Detalle} = conn.models;
const {Op} =require('sequelize');


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
        const {id, name, precio, plato, estado, seguimiento} = req.body
        console.log(id, name, precio, plato, estado, seguimiento, comentario)
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
    
});

module.exports = router;