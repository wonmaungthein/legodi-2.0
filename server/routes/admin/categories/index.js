const express = require('express')
const db = require('../../../dbClients/categoriesDB')
const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const response = await db.getCategories()
    res.status(200).json({ success: true, response })
  } catch (error) {
    console.log(error)
    res.status(502).json({ success: false, error })
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
module.exports = router
