'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Configurations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      mediaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Medias',
          key: 'id'
        }
      },
      phone: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      rgpd: {
        type: Sequelize.TEXT
      },
      metaTitle: {
        type: Sequelize.STRING
      },
      metaDescription: {
        type: Sequelize.STRING
      },
      metaKeyword: {
        type: Sequelize.STRING
      },
      metaImage: {
        type: Sequelize.STRING
      },
      catchPhrase: {
        type: Sequelize.STRING
      },
      homeBackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Medias',
          key: 'id'
        }
      },
      homeSubtitle: {
        type: Sequelize.TEXT
      },
      expertiseParagraph1: {
        type: Sequelize.TEXT
      },
      expertiseParagraphe2: {
        type: Sequelize.TEXT
      },
      expertiseImageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Medias',
          key: 'id'
        }
      },
      technologieSubtitle: {
        type: Sequelize.TEXT
      },
      technologieDescription: {
        type: Sequelize.TEXT
      },
      realisationBackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('Configurations');
  }
};