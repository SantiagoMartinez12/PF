const { Router } = require('express');
const { conn } = require('../db');
const {Resto} = conn.models;
const {Op} =require('sequelize');


const router = Router();

router.get('/', async (req, res, next) =>{
   
});

router.post('/', async (req, res, next) =>{
    
});


module.exports = router;