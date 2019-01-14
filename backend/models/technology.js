'use strict';
module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    mediaId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Technology.associate = function(models) {
    Technology.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'picto'})  };
  return Technology;
};