const fs = require('fs');
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MY_DB_USERNAME,
    password: process.env.MY_DB_PASSWORD,
    database: 'walkoo_development',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.MY_DB_USERNAME,
    password: process.env.MY_DB_PASSWORD,
    database: 'db_name_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.MY_DB_USERNAME,
    password: process.env.MY_DB_PASSWORD,
    database: process.env.MY_DB_NAME,
    host: process.env.MY_DB_HOSTNAME,
    dialect: 'mysql'
  }
};