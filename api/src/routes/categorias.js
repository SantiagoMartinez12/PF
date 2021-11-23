const { Router } = require('express');
const { conn } = require('../db');
const {Categorias} = conn.models;

const router = Router();

router.get("/", async (req, res, next)=>{
    try{
        let cat = await Categorias.findAll({
            attributes:['id', 'name'],
            
        })
        res.send(cat)

    }catch(err){
        next(err)
    }
})
router.post('/', async (req, res, next) =>{
    try{
        const {id, name} = req.body
        const newCategoria = await Categorias.create({
            id,
            name
            
        })
        res.send(newCategoria) 
    }catch(error){
        next(error)
    }
});

router.put('/', async (req, res, next) =>{
    try{
        const {id,  name} = req.body
        const cambiarCategoria = await Categorias.update({
            name:name,
            
        },{
            where:{
                id:id
            }
        })
        res.send(cambiarCategoria) 
    }catch(error){
        next(error)
    }
});

router.delete('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Categorias.destroy({
        attributes : ['id', 'name'],
        where:{
            id:id,
        }
        }) 
        res.send('se ha eliminado con exito')
    }catch(error){
        next(error)
    }
});

module.exports = router;