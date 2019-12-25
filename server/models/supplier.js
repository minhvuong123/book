'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    companyName: DataTypes.STRING,
    contactName: DataTypes.STRING,
    contactTitle: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    country: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING
  }, {});
  Supplier.associate = function(models) {
    // associations can be defined here
  };
  return Supplier;
};