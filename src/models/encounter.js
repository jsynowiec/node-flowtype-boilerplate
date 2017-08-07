'use strict';
module.exports = function(sequelize, DataTypes) {
  var Encounter = sequelize.define('Encounter', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    bloodType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Encounter;
};
