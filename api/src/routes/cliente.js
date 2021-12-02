const { Router } = require('express');
const { conn } = require('../db');
const {Cliente, Mesa} = conn.models;

const router = Router();

router.get('/', async(req, res, next)=>{
    try{
        const clientes = await Cliente.findAll({
    });
    res.json(clientes)

    }catch(error){
        next(error)
    }
})


router.get('/:param', async(req, res, next)=>{
    const { param } = req.params; 
    
    try{
        if(param.length > 15){
            const cliente = await Cliente.findByPk(param);
            res.json(cliente)              
        }
        const clientes = await Cliente.findAll({
            where:{
            estado:param,
            },
            include: {model:Mesa,
                attributes: ['name']
            }
    });
    res.json(clientes)

    }catch(error){
        next(error)
    }
})


router.post('/', async (req, res, next) =>{
    const { nombre, mesaId} = req.body
    
    try{
        const existeId = await Mesa.findByPk(mesaId)
        if(!existeId) return res.status(404);

        const newCliente = await Cliente.create({
            nombre,
            mesaId
        })
        res.status(201).json(newCliente) 
    }catch(error){
        next(error)
    }
});

router.put('/', async (req, res, next) =>{
    const { estado, id} = req.body
    try{
        await Cliente.update({
            estado
        },{
            where:{
                id:id
            }
        })
        res.send('Estado modificado correctamente') 
    }catch(error){
        next(error)
    }
});






module.exports = router;