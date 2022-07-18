const evironment = process.env.EVIRONMENT || 'development';
const config = require('../../../knexfile')[evironment];
const knex = require('knex');
module.exports = knex(config);