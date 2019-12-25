'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id:  DataTypes.STRING,
    name: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    countryID: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};