const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Carro = db.define('Carro', {
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: DataTypes.INTEGER,
  portas: DataTypes.INTEGER,
  cor: DataTypes.STRING,
  combustivel: DataTypes.STRING,
  disponivel: DataTypes.BOOLEAN
}, {
  tableName: 'carros',
  timestamps: true
});

module.exports = Carro;
