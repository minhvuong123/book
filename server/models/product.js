'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    priceNew: DataTypes.DECIMAL,
    image: DataTypes.STRING,
    categoryID: DataTypes.STRING,
    supplierID: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};