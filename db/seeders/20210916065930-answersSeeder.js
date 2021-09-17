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
    await queryInterface.bulkInsert('answers', [{
      questionId: 1,
      title: 'ответ 1',
      personalityId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        questionId: 1,
        title: 'ответ 2',
        personalityId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 1,
        title: 'ответ 3',
        personalityId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          questionId: 1,
          title: 'ответ 4',
          personalityId:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionId: 2,
          title: 'ответ 1',
          personalityId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            questionId: 2,
            title: 'ответ 2',
            personalityId:2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionId: 2,
            title: 'ответ 3',
            personalityId:3,
            createdAt: new Date(),
            updatedAt: new Date(),
            },
            {
              questionId: 2,
              title: 'ответ 4',
              personalityId:4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              questionId: 3,
              title: 'ответ 1',
              personalityId:1,
              createdAt: new Date(),
              updatedAt: new Date(),
              },
              {
                questionId: 3,
                title: 'ответ 2',
                personalityId:2,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              {
                questionId: 3,
                title: 'ответ 3',
                personalityId:3,
                createdAt: new Date(),
                updatedAt: new Date(),
                },
                {
                  questionId: 3,
                  title: 'ответ 4',
                  personalityId:4,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },{
                  questionId: 4,
                  title: 'ответ 1',
                  personalityId:1,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  },
                  {
                    questionId: 4,
                    title: 'ответ 2',
                    personalityId:2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  },
                  {
                    questionId: 4,
                    title: 'ответ 3',
                    personalityId:3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    },
                    {
                      questionId: 4,
                      title: 'ответ 4',
                      personalityId:4,
                      createdAt: new Date(),
                      updatedAt: new Date(),
                    },
                    {
                      questionId: 5,
                      title: 'ответ 1',
                      personalityId:1,
                      createdAt: new Date(),
                      updatedAt: new Date(),
                      },
                      {
                        questionId: 5,
                        title: 'ответ 2',
                        personalityId:2,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                      },
                      {
                        questionId: 5,
                        title: 'ответ 3',
                        personalityId:3,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        },
                        {
                          questionId: 5,
                          title: 'ответ 4',
                          personalityId:4,
                          createdAt: new Date(),
                          updatedAt: new Date(),
                        }
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
