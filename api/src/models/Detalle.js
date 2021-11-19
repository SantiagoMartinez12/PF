const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('detalle', {
    id: {
    type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
    },

    name:{
        type: DataTypes.STRING,
    },

    precio: {
        type: DataTypes.NUMBER,
    },

    plato:{
        type: DataTypes.STRING,
    },

},{
    freezeTableName: true
    });
};