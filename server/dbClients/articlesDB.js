const knex = require('./connection')

function getArticles () {
  return knex.select().from('articles')
};

function getArticleById (id) {
  return knex
    .select()
    .from('articles')
    .where('article_id', '=', id)
}

function addArticle (data) {
  return knex.table('articles').insert({
    image: data.articleImage,
    title: data.title,
    status: data.status,
    sort_order: data.order,
    category_id: data.categoryId,
    full_content: data.fullContent,
    short_content: data.shortContent
  })
};

function editArticle (articleId, data) {
  return knex.table('articles')
    .where('article_id', '=', articleId)
    .update({
      image: data.articleImage,
      title: data.title,
      status: data.status,
      sort_order: data.order,
      category_id: data.categoryId,
      full_content: data.fullContent,
      short_content: data.shortContent
    })
};

function deleteArticle (articleId) {
  return knex.table('articles')
    .where('article_id', '=', articleId)
    .del()
};

module.exports = {
  getArticleById,
  deleteArticle,
  addArticle,
  editArticle,
  getArticles
}
