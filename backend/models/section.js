'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    fields: DataTypes.JSON
  }, {});
  Section.associate = function(models) {
    // associations can be defined here
  };
  return Section;
};