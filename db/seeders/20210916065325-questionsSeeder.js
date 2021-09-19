'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('questions', [{
      title: 'I would enjoy attending a large party in my honor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'I dislike being in competition with others',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'I prefer to follow a schedule',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'I question the wisdom of my elders',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'I enjoy being the center of attention',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
