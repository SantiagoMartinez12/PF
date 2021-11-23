const { Router } = require('express');
const { conn } = require('../db');
const { Producto } = conn.models;
const {Op} =require('sequelize');
const getProduct = require('../functions/getProdct');
const bulkProductDataBase = require('../functions/bulkProductDataBase');


const router = Router();

router.get('/api/producto', async (req, res, next) =>{
    try{
        let parameters = req.body;
        await getProduct(parameters)
    }catch(error){
        next(error)
    }
});

router.post('/api/producto', async (req, res, next) =>{
    try{
        let parameters = req.body;
        await bulkProductDataBase(parameters)
    }catch(error){
        next(error) 
    }
});

router.put('/api/producto', async (req, res, next) =>{
    try{

    }catch(error){
        next(error) 
    }
});

router.delete('/api/producto', async (req, res, next) =>{
    try{

    }catch(error){
        next(error) 
    }
});

module.exports = router;