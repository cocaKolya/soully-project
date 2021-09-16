'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({BirthDate}) {
      // define association here
      this.hasOne(BirthDate, {foreignKey: "userId"})
    }
    static associate({userAnswers}) {
      // define association here
      this.hasMany(userAnswers, {foreignKey: "userId"})
    }
    static associate({lifeAnswers}) {
      // define association here
      this.hasMany(lifeAnswers, {foreignKey: "userId"})
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
