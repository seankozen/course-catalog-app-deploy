'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Course = sequelize.define('Course', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'A title is required.'
            },
            notEmpty: {
              msg: 'Please provide a title.'   
            },  
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'A course description is required.'
            },
            notEmpty: {
              msg: 'Please provide a course description.'   
            },  
        },

    },
    estimatedTime: {
        type: DataTypes.STRING,
    },
    materialsNeeded: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
  });

  // One to one association with user
  Course.associate = (models) => {
    Course.belongsTo(models.User, {
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
      }
    })    
};
  return Course;
};