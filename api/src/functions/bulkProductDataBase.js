const { conn } = require('../db');
const { Producto, Categorias, Resto } = conn.models;
const { Op } = require('sequelize');
const findCategoria = require('./findCategoria');


const bulkProductDataBase = async (parameters) => {

    if (!parameters && parameters.idResto) {
        return null;

    } else if (parameters.categoria) {
        var categoriaControlVar = await findCategoria({ name: parameters.categoria })

        if (!categoriaControlVar) {
            categoriaControlVar = await Categorias.create({
                name: parameters.categoria,
                // restoId: parameters.idResto
            })
        }

        let productCreateRegister = await Producto.create({
            name: parameters.name,
            precio: parameters.precio,
            imagen: parameters.imagen,
            detalle: parameters.detalle,
            categoriaId: categoriaControlVar.dataValues.id
        })


        return productCreateRegister;

    }
}

module.exports = bulkProductDataBase;

