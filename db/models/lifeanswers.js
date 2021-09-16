'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lifeAnswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({lifeQuestions}) {
      // define association here
      this.belongsTo(lifeQuestions,{foreignKey: "questionId"})
    }
    static associate({User}) {
      // define association here
      this.belongsTo(User,{foreignKey: "userId"})
    }
  };
  lifeAnswers.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lifeAnswers',
  });
  return lifeAnswers;
};
