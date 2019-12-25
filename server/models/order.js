'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    requiredDate: DataTypes.DATE,
    shippedDate: DataTypes.DATE,
    status: DataTypes.INTEGER,
    customerID: DataTypes.STRING,
    shipperID: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};