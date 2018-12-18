'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Expertises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paragraphOne: {
        type: Sequelize.STRING
      },
      paragraphTwo: {
        type: Sequelize.STRING
      },
      mediaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medias',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Expertises');
  }
};