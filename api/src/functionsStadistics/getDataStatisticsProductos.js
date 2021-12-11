const { conn } = require('../db');
const { Detalle } = conn.models;
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');

const getDataStatisticsProductos = async (restoId) => {
  const records = await conn.query(
    `SELECT name, SUM(cantidad) totalcantidad, SUM(precio) totalprecio FROM detalle WHERE detalle."restoId"='${restoId}' GROUP BY name ORDER BY totalprecio DESC;`, {
    type: QueryTypes.SELECT
  });
  const recordsTwo = await conn.query(
    `SELECT name, SUM(cantidad) totalcantidad, SUM(precio) totalprecio FROM detalle WHERE detalle."restoId"='${restoId}' GROUP BY name ORDER BY totalcantidad DESC;`, {
    type: QueryTypes.SELECT
  });

  return [records, recordsTwo]
}

module.exports = getDataStatisticsProductos;