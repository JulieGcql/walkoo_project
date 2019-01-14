'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('SectionTechnologies', 'description', Sequelize.TEXT)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('SectionTechnologies', 'description', Sequelize.STRING)
  }
};
