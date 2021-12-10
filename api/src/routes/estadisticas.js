const { Router } = require('express');
const express = require("express");
const getDataStatistics = require('../functionsStadistics/getDataStatistics');
const getDataStatisticsCliente = require('../functionsStadistics/getDataStatisticsCliente');
const getDataStatisticsProductos = require('../functionsStadistics/getDataStatisticsProductos');

const router = Router();
router.use(express.json());

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await getDataStatistics(id);
        res.json(detalle);
    }catch(error){
        next(error)
    }
});

router.get('/cliente/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await getDataStatisticsCliente(id);
        res.json(detalle);
    }catch(error){
        next(error)
    }
});

router.get('/productos/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await getDataStatisticsProductos(id);
        res.json(detalle);
    }catch(error){
        next(error)
    }
});

module.exports = router;