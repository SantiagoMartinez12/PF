const { conn } = require('../db');
const { Producto } = conn.models;


const updateProduct = async (parameters) => {

    if (!parameters.id ) {
        return null;

    } else {

        let productoRegister = await Producto.findOne({ where: { id: parameters.id } });

        let cambiarDetail = await Producto.update({
            name: parameters.name ? parameters.name : productoRegister.dataValues.name,
            precio: parameters.precio ? parameters.precio : productoRegister.dataValues.precio,
            imagen: parameters.imagen ? parameters.imagen : productoRegister.dataValues.imagen,
            detalle: parameters.detalle ? parameters.detalle : productoRegister.dataValues.detalle,
            categoriaId: parameters.categoriaId ? parameters.categoriaId : productoRegister.dataValues.categoriaId
        }, {
            where: {
                id: parameters.id
            }
        })
        return cambiarDetail;
    }

} 


module.exports = updateProduct;