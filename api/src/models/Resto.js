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

      qr: {
        type: DataTypes.STRING,
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
      },

      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      mail: {
        type: DataTypes.STRING,
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
