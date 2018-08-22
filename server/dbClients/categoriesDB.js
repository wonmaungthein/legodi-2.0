const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

function getCategories() {
  return knex.select().from('categories')
};


const getCategoryByName = async (category_name) => {
  const category = await knex('categories').where({ category_name }).first()

  return category
};

function addCategory(data) {
  return knex.table('categories').insert({
    category_id: data.categoryId,
    category_name: data.categoryName,
    short_description: data.shortDescription,
    description: data.description,
    status: data.status,
    icon: data.icon,
    language_id: data.languageId
  })
};

function editCategory(data) {
  return knex.table('categories')
    .where('category_id', '=', data.categoryId)
    .update({
      category_id: data.categoryId,
      category_name: data.categoryName,
      short_description: data.shortDescription,
      description: data.description,
      status: data.status,
      icon: data.icon,
      language_id: data.languageId
    })
};

function deleteCategory(categoryId) {
  return knex.table('categories')
    .where('category_id', '=', categoryId)
    .del()
};

module.exports = {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
  getCategoryByName
}
