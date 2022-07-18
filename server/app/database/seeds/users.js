/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const passInput = 'H0@ngkh@001';
  const salt = bcrypt.genSaltSync(10);
  const passHash = bcrypt.hashSync(passInput, salt);
  await knex('users').del()
  await knex('users').insert([
    {username: 'thkha001', password: passHash, created_at: new Date(), updated_at: new Date()}
  ]);
};
