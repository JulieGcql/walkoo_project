'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expertise = sequelize.define('Expertise', {
    paragraphOne: DataTypes.STRING,
    paragraphTwo: DataTypes.STRING,
    mediaId: DataTypes.INTEGER
  }, {});
  Expertise.associate = function(models) {
    Expertise.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'image'})
  };
  return Expertise;
};