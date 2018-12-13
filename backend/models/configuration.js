'use strict';
module.exports = (sequelize, DataTypes) => {
  const Configuration = sequelize.define('Configuration', {
    title: DataTypes.STRING,
    mediaId: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    rgpd: DataTypes.TEXT,
    metaTitle: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    metaKeyword: DataTypes.STRING,
    metaImage: DataTypes.STRING
  }, {});
  Configuration.associate = function(models) {
    Configuration.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'logo'})
    Configuration.belongsTo(models.Media, {foreignKey: 'homeBackId', as: 'homeBackground'})
    Configuration.belongsTo(models.Media, {foreignKey: 'expertiseImageId', as: 'expertiseImage'})
    Configuration.belongsTo(models.Media, {foreignKey: 'realisationBackId', as: 'realisationBackground'})
  };
  return Configuration;
};