const { conn } = require('../db');
const { Detalle } = conn.models;
const { Op } = require('sequelize');


const getDataStatistics = async (restoId) => {
    const detalle = await Detalle.findAll({
        attributes: ['precio', 'cantidad', 'name', 'createdAt'],
        where: {
            restoId: {
                [Op.iLike]: `${restoId}`
            }
        },
    })
    return detalle
}

module.exports = getDataStatistics;