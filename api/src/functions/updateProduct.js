const { conn } = require('../db');
const findCategoria = require('./findCategoria');
const { Producto } = conn.models;


const updateProduct = async (parameters) => {
   
    if (!parameters.id ) {
        
        return null;

    } else {
        
        let productoRegister = await Producto.findOne({ where: { id: parameters.id } });
        
        if (parameters.categoriaId !== parameters.categoria){
            parameters.categoriaId = parameters.categoria
        }   

        let cambiarDetail = await Producto.update({
            name: parameters.name ? parameters.name : productoRegister.dataValues?.name ? productoRegister.dataValues?.name : null,
            precio: parameters.precio ? parameters.precio : productoRegister.dataValues?.precio ? productoRegister.dataValues?.precio : null,
            imagen: parameters.imagen ? parameters.imagen : productoRegister.dataValues?.imagen ? productoRegister.dataValues?.imagen : null,
            detalle: parameters.detalle ? parameters.detalle : productoRegister.dataValues?.detalle ? productoRegister.dataValues?.detalle : null,
            categoriaId: parameters.categoriaId,
            disponible: parameters.disponible ? parameters.disponible : productoRegister.dataValues?.disponible ? productoRegister.dataValues?.disponible : null, 
        }, {
            where: {
                id: parameters.id
            }
        })
        
        return cambiarDetail;
    }

} 


module.exports = updateProduct;