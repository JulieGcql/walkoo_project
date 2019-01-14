'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    title: DataTypes.STRING,
    mediaId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    section: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    Card.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'image'})
  };
  return Card;
};