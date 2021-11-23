const { conn } = require('../db');
const { Producto, Categorias } = conn.models;
const { Op } = require('sequelize');


const getProduct = async (parameters) => {

    if (!parameters.categoria && !parameters.idResto) {
        let allProducts = await Producto.findAll();
        return allProducts;

    } else if (parameters.categoria) {

        let allProductsResto = await Producto.findAll({
            where: {
                categoriaId: {
                    [Op.iLike]: `${parameters.categoria}`
                }
            },
        })
        return allProductsResto;

    } else if (parameters.idResto && !parameters.categoria) {

        let allCategoriesResto = await Categorias.findAll({
            where: {
                restoId: {
                    [Op.iLike]: `${parameters.idResto}`
                }
            },
        })
        return allCategoriesResto;

    } else if (parameters.producto) {

        let product = await Producto.findAll({
            where: {
                id: {
                    [Op.iLike]: `${parameters.producto}`
                }
            },
        })
        return product;
    }
}

module.exports = getProduct;