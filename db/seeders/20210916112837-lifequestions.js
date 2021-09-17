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
      await queryInterface.bulkInsert('lifeQuestions', [{
        title:"I tend to live in the moment and appreciate the “now.”",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"I often dwell on past experiences and daydream about different outcomes.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"When life gets tough, I retreat from friends and family.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"When I’m under serious stress, I can’t lead a normal life.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"There aren’t enough hours in the day to accomplish everything I want to do.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"I always make time for my hobbies.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"Compliments make me uncomfortable.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"I have good self-esteem.",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"I don’t always know what to expect from people",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"My problems are usually caused by other people.",
        createdAt:new Date(),
        updatedAt:new Date()
      },], {});
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
