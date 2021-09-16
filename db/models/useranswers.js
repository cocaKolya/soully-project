'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAnswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User,{foreignKey: "user.Id"})
    }
    static associate({questions}) {
      // define association here
      this.belongsTo(questions,{foreignKey:"questionId"})
    }
    static associate({answers}) {
      // define association here
      this.belongsTo(answers,{foreignKey: "answerId"})
    }
    static associate({personalities}) {
      // define association here
      this.belongsTo(personalities,{foreignKey: "personalityId"})
    }
  };
  userAnswers.init(
    {
      userId: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
      answerId: DataTypes.INTEGER,
      personalityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'userAnswers',
    }
  );
  return userAnswers;
};
