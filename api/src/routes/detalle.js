const { Router } = require('express');
const { conn } = require('../db');
const {Detalle} = conn.models;

//dhewetetty

const router = Router();

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Detalle.findAll({
        attributes : ['id', 'namecliente', 'precio', 'name', 'estado', 'seguimiento', 'cantidad'],
        where:{
            id:id,
        }
        }) 
        res.send(detalle)
    }catch(error){
        next(error)
    }
});

router.post('/', async (req, res, next) =>{
    try{
        const data = req.body
        
        const newDetalle = await data.forEach(async(register)=>{
            await Detalle.create({
            mesaId: register.idMesa,
            namecliente: register.nameCliente,
            precio: register.precio,
            name: register.name,
            estado: register.estado,
            seguimiento: register.seguimiento,
            comentario: register.comentario,
            cantidad: register.cantidad,
            clienteId: register.idCliente
        })})
        res.send(newDetalle) 
       
    }catch(error){
        next(error)
    }
});

router.put('/', async (req, res, next) =>{
    try{
        const {mesaId, id, namecliente, precio, name, estado, seguimiento, comentario, cantidad} = req.body
        const cambiarDetail = await Detalle.update({
            
            namecliente:namecliente,
            precio:precio,
            name:name,
            estado:estado,
            seguimiento:seguimiento,
            comentario:comentario,
            cantidad:cantidad
        },{
            where:{
                id:id
            }
        })
        res.send('su detalle se ha cambiado con exito') 
    }catch(error){
        next(error)
    }
});
router.put('/seguimiento/', async (req, res, next) =>{
    try{
        const {id, seguimiento} = req.body
        
        const cambiarSeguimiento = await Detalle.update({
            
            seguimiento:seguimiento,
            
        },{
            where:{
                id:id
            }
        })
        res.send('su seguimiento se ha cambiado con exito') 
    }catch(error){
        next(error)
    }
});

router.delete('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const detalle = await Detalle.destroy({
        where:{
            id:id,
        }
        }) 
        res.send('se ha eliminado con exito')
    }catch(error){
        next(error)
    }
});
router.get('/idcliente/:idCliente', async (req, res, next) =>{
    
    try{
        const {idCliente} = req.params;
       
        const detalle = await Detalle.findAll({
        attributes : ['id', 'namecliente', 'precio', 'name', 'estado', 'seguimiento', 'cantidad', 'clienteId','mesaId'],
        where:{
            clienteId:idCliente,
        }
        }) 
      
        res.send(detalle)
    }catch(error){
        next(error)
    }
});

router.delete("/", async (req, res, next) => {
    try {
      const { id, name, precio, plato, estado, seguimiento, comentario } =
        req.body;
      const deleteDetail = await Detalle.destroy(
        {
          name: name,
          precio: precio,
          plato: plato,
          estado: estado,
          seguimiento: seguimiento,
          comentario: comentario,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.send(deleteDetail);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;