'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BirthData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User,{foreignKey: 'userId'})
    }
  };
  BirthData.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    place: DataTypes.STRING,
    time: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BirthData',
  });
  return BirthData;
};
