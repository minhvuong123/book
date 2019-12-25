'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shipper = sequelize.define('Shipper', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {});
  Shipper.associate = function(models) {
    // associations can be defined here
  };
  return Shipper;
};