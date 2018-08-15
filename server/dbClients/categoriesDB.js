const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)
function getCategories () {
  return knex.select().from('categories')
};
function addCategory (data) {
  return knex.table('categories').insert(data)
};
module.exports = {
  getCategories,
  addCategory
}
