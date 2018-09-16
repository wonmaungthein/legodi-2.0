const languagesData = require('./data/languages')
const categoriesData = require('./data/categories')
const generateArticles = require('./data/articles')
const rightToRemain = require('./data/rightToRemain.json')
const usersData = require('./data/users')
const weegieData = require('./data/weegie')
const citiesData = require('./data/cities')

exports.seed = async (knex, Promise) => {
  await knex('articles').del()
  await knex('categories').del()
  await knex('languages').del()
  await knex('users').del()
  await knex('weegie').del()
  await knex('cities').del()

  await knex('languages').insert(languagesData)
  await knex('cities').insert(citiesData)
  await knex('categories').insert(categoriesData)

  const articles = await generateArticles()
  await knex('articles').insert(articles)
  await knex('articles').insert(rightToRemain)

  await knex('users').insert(usersData)
  await knex('weegie').insert(weegieData)
}
