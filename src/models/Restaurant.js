const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Restaurant = sequelize.define('restaurantes', { 
    id_restaurante: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_restaurante: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone_restaurante: { 
        type: DataTypes.STRING,
    },
    endereco_restaurante: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
  
}, {
    underscored: true, 
    timestamps: true,   
    tableName: 'restaurantes' 
});

module.exports = Restaurant;