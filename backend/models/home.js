'use strict';
module.exports = (sequelize, DataTypes) => {
  const Home = sequelize.define('Home', {
    catchPhrase: DataTypes.STRING,
    mediaId: DataTypes.INTEGER,
    subtitle: DataTypes.STRING
  }, {});
  Home.associate = function(models) {
    Home.belongsTo(models.Media, {foreignKey: 'mediaId', as: 'background'})
  };
  return Home;
};