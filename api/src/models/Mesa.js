const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('mesa', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    estado: {
      type: DataTypes.BOOLEAN,
    },

    cuenta: {
      type: DataTypes.INTEGER,
    },

    qr: {
      type: DataTypes.STRING,
    },
    
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    
    });
};