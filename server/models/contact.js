'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    address: DataTypes.STRING,
    tel: DataTypes.STRING,
    detail: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};