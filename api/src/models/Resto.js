const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "resto",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      
      mail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      }, 
      
      image: {
        type: DataTypes.TEXT,
        
      },

      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      usuario: {
        type: DataTypes.STRING,
        unique: true
      },

      contraseña: {
        type: DataTypes.STRING,
        
      },


      mesa: {
        type: DataTypes.INTEGER,
          defaultValue: 0
        
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
    }
  );
};
