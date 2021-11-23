const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('detalle', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
        },

        precio: {
            type: DataTypes.INTEGER,
        },

<<<<<<< HEAD
    plato:{
            type: DataTypes.STRING,
    },
=======
        plato: {
            type: DataTypes.STRING,
        },
>>>>>>> e3d6e773388b301104e66212f905cbe58520cd3b

        estado: {
            type: DataTypes.BOOLEAN,
        },

        seguimiento: {
            type: DataTypes.ENUM('solicitado', 'confirmado', 'entregado', 'pagado'),
        },

        comentario: {
            type: DataTypes.STRING
        }

},{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    });
};