'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};