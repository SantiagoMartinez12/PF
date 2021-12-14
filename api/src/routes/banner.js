const { Router } = require('express');
const express = require("express");
const { conn } = require('../db');
const { Banner } = conn.models;
const { Op } = require('sequelize');

const router = Router();
router.use(express.json());

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        let bannerImg = await Banner.findAll({
            where: {
                restoId: {
                    [Op.iLike]: `${id}`
                }
            },
        })
        res.json(bannerImg);
    }catch(error){
        next(error)
    }
});

router.post('/', async (req, res, next) =>{
    try{
        const {id, image} = req.body;
        await Banner.create({
            image: image,
            restoId: id,
        })
        res.json({response:'correcto'});
    }catch(error){
        next(error)
    }
});

router.delete('/', async (req, res, next) =>{
    try{
        const {id} = req.query;
        console.log(req.query)
        await Banner.destroy({
            where: {
                id: {
                    [Op.iLike]: `${id}`
                }
            },
        });
        res.json({response:'correcto'});
    }catch(error){
        next(error) 
    }
});


module.exports = router;