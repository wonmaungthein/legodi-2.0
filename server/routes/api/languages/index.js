const express = require('express')
const db = require('../../../dbClients/languageDB')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getLanguages()
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.post('/', async (req, res) => {
  const data = req.body
  try {
    const response = await db.addLanguage(data)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.put('/', async (req, res) => {
  const data = req.body
  try {
    const response = await db.editLanguage(data)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.delete('/', async (req, res) => {
  const { languageId } = req.query
  try {
    const response = await db.deleteLanguage(languageId)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

module.exports = router
