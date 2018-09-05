const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const getCategories = () => {
  return knex.select().from('categories')
}

const getArticlesByCategoryId = categoryId => {
  return knex
    .select()
    .from('articles')
    .where('category_id', '=', categoryId)
}

const getCategoryById = categoryId => {
  return knex('categories').where('category_id', '=', categoryId)
}

const getCategoryByName = async categoryName => {
  const category = await knex('categories')
    .where('category_name', '=', categoryName)
    .first()
  return category
}

const getCategoryByLanguage = async (languageId, cityId) => {
  return knex('categories').where('language_id', '=', languageId).andWhere('city_id', '=', cityId)
}

const addCategory = data => {
  return knex.table('categories').insert({
    category_name: data.categoryName,
    short_description: data.shortDescription,
    description: data.description,
    status: data.status,
    icon: data.icon,
    language_id: data.languageId,
    city_id: data.cityId,
    order: data.order
  })
}

const editCategory = (categoryId, data) => {
  return knex
    .table('categories')
    .where('category_id', '=', categoryId)
    .update({
      category_name: data.categoryName,
      short_description: data.shortDescription,
      description: data.description,
      status: data.status,
      icon: data.icon,
      language_id: data.languageId,
      city_id: data.cityId,
      order: data.order
    })
}

const deleteCategory = categoryId => {
  return knex
    .table('categories')
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
  getCategoryByName,
  getCategoryById
}
