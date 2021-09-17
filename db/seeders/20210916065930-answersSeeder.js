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
    let arr1 = [];
    for (let i = 1; i < 6; i++) {
      arr1.push({
        questionId: i,
        title: 'YES',
        personalityId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    for (let i = 1; i < 6; i++) {
      arr1.push({
        questionId: i,
        title: 'yes',
        personalityId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    for (let i = 1; i < 6; i++) {
      arr1.push({
        questionId: i,
        title: 'uncertain',
        personalityId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    for (let i = 1; i < 6; i++) {
      arr1.push({
        questionId: i,
        title: 'no',
        personalityId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    for (let i = 1; i < 6; i++) {
      arr1.push({
        questionId: i,
        title: 'NO',
        personalityId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('answers', arr1, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
