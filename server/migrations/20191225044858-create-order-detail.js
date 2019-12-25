'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      unitPrice: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.STRING
      },
      orderID: {
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
    return queryInterface.dropTable('OrderDetails');
  }
};