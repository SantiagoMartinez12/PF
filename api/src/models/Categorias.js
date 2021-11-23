const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categorias', {
    id: {
        type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING,
    },
    
  },{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,

    });
};