const { conn } = require('../db');
const { Cliente } = conn.models;
const { Op } = require('sequelize');


const getDataStatisticsCliente = async (restoId) => {
    const detalle = await Cliente.findAll({
        attributes: ['updatedAt'],
        where: {
            restoId: {
                [Op.iLike]: `${restoId}`
            }
        },
    })
    return detalle
}

module.exports = getDataStatisticsCliente;