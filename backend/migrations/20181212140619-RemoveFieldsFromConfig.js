'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('Configurations', 'catchPhrase'),
    queryInterface.removeColumn('Configurations', 'homeBackId'),
    queryInterface.removeColumn('Configurations', 'homeSubtitle'),
    queryInterface.removeColumn('Configurations', 'expertiseParagraph1'),
    queryInterface.removeColumn('Configurations', 'expertiseParagraphe2'),
    queryInterface.removeColumn('Configurations', 'expertiseImageId'),
    queryInterface.removeColumn('Configurations', 'technologieSubtitle'),
    queryInterface.removeColumn('Configurations', 'technologieDescription'),
    queryInterface.removeColumn('Configurations', 'realisationBackId')])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn('Configurations', 'catchPhrase', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'homeBackId', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'homeSubtitle', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'expertiseParagraph1', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'expertiseParagraphe2', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'expertiseImageId', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'technologieSubtitle', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'technologieDescription', Sequelize.STRING),
    queryInterface.addColumn('Configurations', 'realisationBackId', Sequelize.STRING)])
  }
};