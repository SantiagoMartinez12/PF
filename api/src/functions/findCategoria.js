const { conn } = require('../db');
const {  Categorias } = conn.models;
const { Op } = require('sequelize');


const findCategoria = async (categoria) => {
    let categoriaRegister = await Categorias.findOne({ where: categoria });
    return categoriaRegister;
}

module.exports = findCategoria;