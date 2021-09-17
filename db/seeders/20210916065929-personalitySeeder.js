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
      personalityName: "Openness",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        personalityName: "Conscientiousness",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          personalityName: "Extraversion",
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            personalityName: "Agreeableness",
            createdAt: new Date(),
            updatedAt: new Date(),
            },
            {
              personalityName: "Neuroticism",
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
