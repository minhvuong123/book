'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    birthDay: DataTypes.DATE,
    address: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};