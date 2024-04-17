const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Cliente = db.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'clientes',
  timestamps: true 
});

module.exports = Cliente;

