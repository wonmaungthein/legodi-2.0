const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const getCategories = () => {
  return knex.select().from('categories')
}

const getArticlesByCategoryId = (category_id) => {
  return knex.select().from('articles').where({ category_id })
}

const getCategoryByName = async (category_name) => {
  const category = await knex('categories').where({ category_name }).first()
  return category
}

const getCategoryByLanguage = async (language_id) => {
  return knex('categories').where({ language_id })
}

const addCategory = (data) => {
  return knex.table('categories').insert({
    category_id: data.categoryId,
    category_name: data.categoryName,
    short_description: data.shortDescription,
    description: data.description,
    status: data.status,
    icon: data.icon,
    language_id: data.languageId
  })
}

const editCategory = (data) => {
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
}

const deleteCategory = (categoryId) => {
  return knex.table('categories')
    .where('category_id', '=', categoryId)
    .del()
}

module.exports = {
  getArticlesByCategoryId,
  getCategoryByLanguage,
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
  getCategoryByName
}
