'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    id: DataTypes.STRING,
    unitPrice: DataTypes.STRING,
    quantity: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    productID: DataTypes.STRING,
    orderID: DataTypes.STRING
  }, {});
  OrderDetail.associate = function(models) {
    // associations can be defined here
  };
  return OrderDetail;
};