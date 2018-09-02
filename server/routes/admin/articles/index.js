const express = require('express')
const db = require('../../../dbClients/articlesDB')

const router = express.Router()

router.get('/', async (req, res) => res.render('article-menu'))

router.get('/view', async (req, res) => {
  try {
    const data = await db.getArticles()
    res.render('article-table-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/view/:articleId', async (req, res) => {
  const { articleId } = req.params
  try {
    const data = await db.getArticleById(articleId)
    console.log(data)
    res.render('article-view', { data: data[0] })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/add', async (req, res) => res.render('article-add'))

router.post('/add', async (req, res) => {
  const { body } = req
  try {
    await db.addArticle(body)
    res.redirect('/admin/articles/view')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit', async (req, res) => {
  try {
    const data = await db.getArticles()
    res.render('article-table-edit', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/delete/:articleId', async (req, res) => {
  const { articleId } = req.params
  try {
    await db.deleteArticle(articleId)
    res.redirect('/admin/articles/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit/:articleId', async (req, res) => {
  const { articleId } = req.params
  try {
    const article = await db.getArticleById(articleId)
    const data = article[0]
    res.render('article-add', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.post('/edit/:articleId', async (req, res) => {
  const { articleId } = req.params
  const { body } = req
  try {
    await db.editArticle(articleId, body)
    res.redirect('/admin/articles/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

module.exports = router
