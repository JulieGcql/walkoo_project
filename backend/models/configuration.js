'use strict';
module.exports = (sequelize, DataTypes) => {
  const Configuration = sequelize.define('Configuration', {
    title: DataTypes.STRING,
    mediaId: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    socialLinks: DataTypes.STRING,
    rgpd: DataTypes.STRING,
    users: DataTypes.STRING,
    metaTitle: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    metaKeyword: DataTypes.STRING,
    metaImage: DataTypes.STRING,
    catchPhrase: DataTypes.STRING,
    homeBackId: DataTypes.INTEGER,
    homeSubtitle: DataTypes.TEXT,
    expertiseParagraph1: DataTypes.TEXT,
    expertiseParagraphe2: DataTypes.TEXT,
    expertiseImageId: DataTypes.INTEGER,
    technologieSubtitle: DataTypes.TEXT,
    technologieDescription: DataTypes.TEXT,
    realisationBackId: DataTypes.INTEGER,
  }, {});
  Configuration.associate = function(models) {
    Configuration.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'logo'})
    Configuration.belongsTo(models.Media, {foreignKey: 'homeBackId', as: 'homeBackground'})
    Configuration.belongsTo(models.Media, {foreignKey: 'expertiseImageId', as: 'expertiseImage'})
    Configuration.belongsTo(models.Media, {foreignKey: 'realisationBackId', as: 'realisationBackground'})
  };
  return Configuration;
};