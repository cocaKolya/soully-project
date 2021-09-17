'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personalities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({userAnswers}) {
      this.hasMany(userAnswers, {foreignKey: "personalityId"})
      // define association here
    }
    static associate({answers}) {
      // define association here
      this.hasMany(answers,{foreignKey: "personalityId"})
    }
  };
  personalities.init({
    personalityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personalities',
  });
  return personalities;
};
