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
            defaultValue: false,
        },

        seguimiento: {
            type: DataTypes.ENUM('solicitado', 'confirmado', 'entregado', 'pagado'),
            defaultValue: 'solicitado',
        },

        comentario: {
            type: DataTypes.STRING
        },

        cantidad:{
            type:DataTypes.INTEGER
        },
        clienteId:{
            type:DataTypes.STRING
        }

},{
    freezeTableName: true,
    updatedAt: false,
    });
};