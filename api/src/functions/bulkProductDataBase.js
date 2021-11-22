const { conn } = require('../db');
const { Producto, Categorias } = conn.models;
const { Op } = require('sequelize');
const findCategoria = require('./findCategoria');


const bulkProductDataBase = async (parameters) => {

    if ( !parameters && parameters.idResto ) {
        return null;

    } else if ( parameters.categoria ) {

        let categoriaControlVar = await findCategoria({ name: parameters.categoria })

        if ( !categoriaControlVar ) {
            await Categorias.create({
                name: parameters.categoria
            })
        }

        Producto.create({
            name: parameters.name,
            precio: parameters.precio,
            imagen: parameters.imagen,
            detalle: parameters.detalle
        })

        let productCreateRegister = await findCategoria({ name: parameters.categoria });
        para.country.forEach(async (el) => {
            await productCreateRegister.addCountry(el)
        })

        return allProductsResto;

    } 
}

module.exports = bulkProductDataBase;

