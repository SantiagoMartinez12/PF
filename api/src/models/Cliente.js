const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('cliente', {
    id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    nombre: {
      type: DataTypes.STRING,
    },

    restoId: {
      type: DataTypes.STRING,
    },

    mesaId: {
      type: DataTypes.STRING,
    },

    estado: {
      type: DataTypes.STRING,
      defaultValue:'solicitado'
    },
    
    nuevoPedido: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    comentario:{
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    createdAt: false,
    });
};