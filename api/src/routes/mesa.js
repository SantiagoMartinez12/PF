const { Router } = require('express');
const { conn } = require('../db');
const {Mesa} = conn.models;

const router = Router();

router.get('/:id', async (req, res, next) => {
    try{
        const {id} = req.params
        const mesa = await Mesa.findAll({
            attributes:['id', 'name', 'estado', 'cuenta', 'qr'],
            where:{
                id:id,
            }
        })
        res.send(mesa)
    }catch(error){
        next(error)
    }
});


router.post('/', async (req, res, next) =>{
    try{
        const {id, name, estado, cuenta, qr} = req.body
        const newMesa = await Mesa.create({
            id,
            qr,
            name,
            estado,
            cuenta
            
        })
        res.send(newMesa) 
    }catch(error){
        next(error)
    }
});

router.put('/', async (req, res, next) =>{
    try{
        const {cuenta, estado, id} = req.body
        const NewCuenta = await Mesa.update({
            estado:estado,
            cuenta:cuenta
        },{
            where:{
                id:id
            }
        })
        res.send('su cuenta se ha cambiado con exito') 
    }catch(error){
        next(error)
    }
});


module.exports = router;