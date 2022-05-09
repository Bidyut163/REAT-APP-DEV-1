const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Appeal = sequelize.define(
    'appeal',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        casename: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        casedescription: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Appeal;
