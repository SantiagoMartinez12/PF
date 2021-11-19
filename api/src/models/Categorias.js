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
    },

    name: {
      type: DataTypes.STRING,
    },
    
  },{
    freezeTableName: true
    });
};