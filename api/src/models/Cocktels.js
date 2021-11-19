const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cocktels', {
    id: {
    type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
    },

    name:{
        type: DataTypes.STRING,
    },

    precio: {
        type: DataTypes.INTEGER,
    },

    imagen:{
        type: DataTypes.STRING,
    },

    detalle:{
        type: DataTypes.STRING,
    },

},{
    freezeTableName: true
    });
};