'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expertise = sequelize.define('Expertise', {
    paragraphOne: DataTypes.TEXT,
    paragraphTwo: DataTypes.TEXT,
    mediaId: DataTypes.INTEGER
  }, {});
  Expertise.associate = function(models) {
    Expertise.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'image'})
  };
  return Expertise;
};