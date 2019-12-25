'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATE
      },
      requiredDate: {
        type: Sequelize.DATE
      },
      shippedDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      },
      customerID: {
        type: Sequelize.STRING
      },
      shipperID: {
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
    return queryInterface.dropTable('Orders');
  }
};