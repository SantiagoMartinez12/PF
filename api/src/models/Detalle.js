const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('detalle', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        namecliente: {
            type: DataTypes.STRING,
        },

        precio: {
            type: DataTypes.INTEGER,
        },

        name: {
            type: DataTypes.STRING,
        },

        estado: {
            type: DataTypes.BOOLEAN,
        },

        seguimiento: {
            type: DataTypes.ENUM('solicitado', 'confirmado', 'entregado', 'pagado'),
        },

        comentario: {
            type: DataTypes.STRING
        },

        cantidad:{
            type:DataTypes.INTEGER
        }

},{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    });
};