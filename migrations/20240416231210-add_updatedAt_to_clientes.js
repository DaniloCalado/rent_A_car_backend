'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clientes', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('clientes', 'updatedAt');
  }
};
