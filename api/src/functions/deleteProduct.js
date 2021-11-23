const { conn } = require('../db');
const { Producto } = conn.models;


const deleteProduct = async (parameters) => {

    if (!parameters.id) {
        return null;

    } else {

        await Producto.destroy({
            where: {
                id: parameters.id
            }
        });
    }
}


module.exports = deleteProduct;