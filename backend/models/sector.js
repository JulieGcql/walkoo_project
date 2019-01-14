'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define('Sector', {
    mediaId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Sector.associate = function(models) {
    Sector.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'picto'})  };
  return Sector;
};