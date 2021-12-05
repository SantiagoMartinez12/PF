const { Router } = require('express');
const { conn } = require('../db');
const {Cliente, Mesa} = conn.models;

const router = Router();

router.get('/cliente/:idCliente', async(req, res, next)=>{
    const {idCliente} = req.params
    try{
        const cliente = await Cliente.findByPk(idCliente);
    
        res.json(cliente)

    }catch(error){
        next(error)
    }
})


router.get('/:id/:param', async(req, res, next)=>{
    const { id,param } = req.params; 
    
    try{
        if(param.length > 15){
            const cliente = await Cliente.findByPk(param);
            return res.json(cliente)              
        }
        const clientes = await Cliente.findAll({
            where:{
            restoId:id,    
            estado:param,
            },
            include: {model:Mesa,
                attributes: ['name']
            }
        });
        return res.json(clientes)

    }catch(error){
        next(error)
    }
})


router.post('/', async (req, res, next) =>{
    const { nombre, restoId, mesaId} = req.body
    
    try{
        const newCliente = await Cliente.create({
            nombre,
            restoId,
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