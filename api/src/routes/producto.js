const { Router } = require('express');
const getProduct = require('../functions/getProdct');
const bulkProductDataBase = require('../functions/bulkProductDataBase');
const updateProduct = require('../functions/updateProduct');
const express = require("express");
const deleteProduct = require('../functions/deleteProduct');

const router = Router();
router.use(express.json());


router.post('/', async (req, res, next) =>{
    try{
        let parameters = req.body;
        await bulkProductDataBase(parameters);
        res.json({response:'correcto'});
    }catch(error){
        next(error) 
    }
});


router.get('/', async (req, res, next) =>{
    try{
        let parameters = req.query;
        let result = await getProduct(parameters);
        res.json(result);
    }catch(error){
        next(error)
    }
});


router.put('/', async (req, res, next) =>{
    try{
        let parameters = req.body;
        await updateProduct(parameters);
        res.json({response:'correcto'});
    }catch(error){
        next(error) 
    }
});

router.delete('/', async (req, res, next) =>{
    try{
        let parameters = req.body;
        await deleteProduct(parameters);
        res.json({response:'correcto'});
    }catch(error){
        next(error) 
    }
});

module.exports = router;