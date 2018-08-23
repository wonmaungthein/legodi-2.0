const express = require('express')
const db = require('../../../dbClients/articlesDB')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getArticles()
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.get('/:articleId', async (req, res) => {
    const { articleId } = req.params
    try {
      const response = await db.getArticleById(articleId)
      res.status(200).json(response)
    } catch (error) {
      res.status(502).json(error)
    }
  })

  router.post('/', async (req, res) => {
    const data = req.body
    try {
      const response = await db.addArticle(data)
      res.status(200).json(response)
    } catch (error) {
      res.status(502).json(error)
    }
  })

  router.put('/:articleId', async (req, res) => {
      const { articleId } = req.params;
    const data = req.body
    try {
      const response = await db.editArticle(articleId, data)
      res.status(200).json(response)
    } catch (error) {
      res.status(502).json(error)
    }
  })

  router.delete('/:articleId', async (req, res) => {
    const { articleId } = req.params;
  try {
    const response = await db.deleteArticle(articleId)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

module.exports = router
