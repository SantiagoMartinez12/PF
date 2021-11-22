const { conn } = require('../db');
const { Producto, Categorias } = conn.models;
const {Op} =require('sequelize');


const getProduct = async (parameters) => {
    if (!parameters) {

        let allProducts = await Producto.findAll();
        return allProducts;

    } else if ( parameters.idResto && parameters.categoria) {

        let allProductsResto = await Producto.findAll({
            where: {
                categoriaId: {
                    [Op.iLike]: {}`%${parameters.categoria}%`
                }
            },
            include: [Categorias],
        })
        return allProductsResto;
    }
}

module.exports = getProduct;