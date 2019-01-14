'use strict';
module.exports = (sequelize, DataTypes) => {
  const Realisation = sequelize.define('Realisation', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    available: DataTypes.BOOLEAN
  }, {});
  Realisation.associate = function(models) {
    // associations can be defined here
  };
  return Realisation;
};