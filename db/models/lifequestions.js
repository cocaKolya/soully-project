'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lifeQuestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({lifeAnswers}) {
      // define association here
      this.hasMany(lifeAnswers, {foreignKey:"questionId"})
    }
  };
  lifeQuestions.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lifeQuestions',
  });
  return lifeQuestions;
};
