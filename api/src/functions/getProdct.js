const { conn } = require('../db');
const { Producto, Categorias } = conn.models;
const { Op } = require('sequelize');


const getProduct = async (parameters) => {

    if (parameters.producto) {

        let product = await Producto.findAll({
            where: {
                id: {
                    [Op.iLike]: `${parameters.producto}`
                }
            },
            include: [Categorias],
        })
        return product;
    }

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
            include: [Categorias],
        })
        return allProductsResto;

    } else if (parameters.idResto && !parameters.categoria) {

        let allCategoriesResto = await Categorias.findAll({
            attributes: [
                "name",
              ],
            include: [Producto],
            where: {
                restoId: {
                    [Op.iLike]: `${parameters.idResto}`
                }
            },
        })
        return allCategoriesResto;

    } 
}

module.exports = getProduct;