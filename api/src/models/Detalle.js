const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('detalle', {
    id: {
    type: 
    DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
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
    },

    comentario:{
        type: DataTypes.STRING
    }

},{
    freezeTableName: true,

    });
};