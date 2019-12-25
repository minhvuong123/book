'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      priceNew: {
        type: Sequelize.DECIMAL
      },
      image: {
        type: Sequelize.STRING
      },
      categoryID: {
        type: Sequelize.STRING
      },
      supplierID: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};