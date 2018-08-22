const express = require('express')
const db = require('../../../dbClients/categoriesDB')
const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const response = await db.getCategories()
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(502).json(error)
  }
})
router.post('/', async (req, res) => {
  const data = req.body
  console.log(data)
  try {
    const response = await db.addCategory(data)
    res.status(200).json({ success: true, response })
    console.log(data)
  } catch (error) {
    console.log(error)
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
  console.log(categoryId)
  try {
    await db.deleteCategory(categoryId)
    res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
    res.status(502).json({ success: false, error })
  }
})
module.exports = router
