'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({userAnswers}) {
      // define association here
      this.hasMany(userAnswers, {foreignKey: "questionId"})
    }
  };
  questions.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'questions',
  });
  return questions;
};
