'use strict';
module.exports = (sequelize, DataTypes) => {
  const SectionTechnology = sequelize.define('SectionTechnology', {
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  SectionTechnology.associate = function(models) {
    // associations can be defined here
  };
  return SectionTechnology;
};