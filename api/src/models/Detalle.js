const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('detalle', {
    id: {
    type: 
        DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
    },

    name:{
        type: DataTypes.STRING,
    },

    precio: {
        type: DataTypes.INTEGER,
    },

    plato:{
        type: DataTypes.STRING,
    },

    estado: {
        type: DataTypes.BOOLEAN,
    },

    seguimiento: {
        type: DataTypes.ENUM('solicitado', 'confirmado', 'entregado', 'pagado'),
    }

},{
    freezeTableName: true
    });
};