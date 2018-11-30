'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define('Subscriber', {
    firstName: DataTypes.STRING,
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    activitySector: DataTypes.STRING,
    requestDemo: DataTypes.BOOLEAN,
    message: DataTypes.TEXT
  }, {});
  Subscriber.associate = function(models) {
    // associations can be defined here
  };
  return Subscriber;
};