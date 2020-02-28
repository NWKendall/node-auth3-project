const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environ = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[environ]);
