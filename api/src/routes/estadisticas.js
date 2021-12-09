const { Router } = require('express');
const express = require("express");
const getDataStatistics = require('../functions/getDataStatistics');

const router = Router();
router.use(express.json());

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params
        const detalle = await getDataStatistics(id)
        res.json(detalle)
    }catch(error){
        next(error)
    }
});

module.exports = router;