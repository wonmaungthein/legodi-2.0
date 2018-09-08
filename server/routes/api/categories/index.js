const express = require('express')
const db = require('../../../dbClients/categoriesDB')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getCategories()
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.get('/:categoryId/articles', async (req, res) => {
  const { categoryId } = req.params
  try {
    const response = await db.getArticlesByCategoryId(categoryId)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.get('/language', async (req, res) => {
  const { language, city } = req.query
  try {
    const response = await db.getCategoryByLanguage(language, city)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.post('/', async (req, res) => {
  const data = req.body
  try {
    const response = await db.addCategory(data)
    res.status(200).json({ success: true, response })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

router.put('/', async (req, res) => {
  const data = req.body
  try {
    await db.editCategory(data)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

router.delete('/', async (req, res) => {
  const { categoryId } = req.query
  try {
    await db.deleteCategory(categoryId)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

module.exports = router
