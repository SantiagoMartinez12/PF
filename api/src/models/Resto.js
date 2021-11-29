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
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      image: {
        type: DataTypes.BLOB,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      mail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },

      mesa: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
    }
  );
};
