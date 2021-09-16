'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ userAnswers }) {
      this.hasMany(userAnswers, { foreignKey: 'answerId' });
      // define association here
    }
    static associate({ personalities }) {
      this.belongsTo(personalities, { foreignKey: 'personalityId' });
      // define association here
    }
    static associate({ questions }) {
      this.belongsTo(questions, { foreignKey: 'questionId' });
      // define association here
    }
  };
  answers.init({
    title: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
    personalityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'answers',
  });
  return answers;
};
