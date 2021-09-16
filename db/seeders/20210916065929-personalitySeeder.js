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
    await queryInterface.bulkInsert('personalities', [{
      personalityName: "cool",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        personalityName: "loh",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          personalityName: "pidr",
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            personalityName: "musor",
            createdAt: new Date(),
            updatedAt: new Date(),
            }], {});
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
