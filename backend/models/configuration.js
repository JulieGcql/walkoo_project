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
  };
  return Configuration;
};