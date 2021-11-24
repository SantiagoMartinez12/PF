const { conn } = require('../db');
const {  Categorias } = conn.models;


const findCategoria = async (categoria, idResto) => {
    let categoriaRegister = await Categorias.findOne({ where: {name: categoria, 
        restoId: idResto} });
    return categoriaRegister;
}

module.exports = findCategoria;