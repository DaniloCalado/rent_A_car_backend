const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Aluguel = db.define('Aluguel', {
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Cliente', 
      key: 'id' 
    }
  },
  carro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Carro', 
      key: 'id'
    }
  }
}, {
  tableName: 'aluguel',
  timestamps: true 
});

module.exports = Aluguel;
