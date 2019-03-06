'use strict';
const Sequelize = require('sequelize');
const dbConfig = require('./../../configs/sequelize-config.json');

const db = new Sequelize({
    username: dbConfig.DB_USERNAME,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_DATABASE,
    host: dbConfig.DB_HOST,
    dialect: dbConfig.DB_DIALECT,
    operatorsAliases: false,    
    logging:false,
    dialectOptions: {
        encrypt: true
    }
});

module.exports = {
    Sequelize, db
}