const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = sequelize.define('clientes', { 
    id_cliente: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_cliente: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha_cliente: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: { 
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: { 
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'clientes', 
    underscored: true, 
    timestamps: true, 
});

module.exports = User;