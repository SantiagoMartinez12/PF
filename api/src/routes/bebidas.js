const { Router } = require('express');
const { conn } = require('../db');
const {Bebidas, Resto} = conn.models;
const {Op} =require('sequelize');


const router = Router();

router.get('/', async (req, res, next) =>{
    try{
        const bebidas = await Bebidas.findAll()
          res.send(bebidas)
    }catch(error){
        next(error)
    }
});

router.post('/', async (req, res, next) =>{
    try{
        const {name, precio, imagen, detalle} = req.body;
        const newBebida = await Bebidas.create({
            name,
            precio,
            imagen,
            detalle 
        
        })
        Resto.addBebidas(newBebida)
        res.status(201).send(newBebida)
    }catch(error){
        next(error) 
    }
});


module.exports = router;