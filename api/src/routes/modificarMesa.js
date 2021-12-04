const { Router } = require('express');
const { conn } = require('../db');
const modificarMesaQr = require('../functions/modificarMesaQr');
const {Mesa, Resto} = conn.models;

const router = Router();


router.put('/', async (req, res, next) =>{
    try{
        let {mesa, restoId} = req.body
        let comparar = await Resto.findOne({where:{
            id: restoId,
        }})
        let update = await Resto.update({
            mesa:mesa,
            
        },{
            where:{
                id:restoId
            }
        })
        modificarMesaQr(comparar.dataValues.mesa, update.mesa, restoId)
        res.send('se modico con exito')
    }catch(error){
        next(error)
    }
})

module.exports = router;