'use strict';
module.exports = (sequelize, DataTypes) => {
  const SectionRealisation = sequelize.define('SectionRealisation', {
    mediaId: DataTypes.INTEGER
  }, {});
  SectionRealisation.associate = function(models) {
    SectionRealisation.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'backgroundImage'})
  };
  return SectionRealisation;
};