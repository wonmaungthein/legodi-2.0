const express = require('express')
const db = require('../../../dbClients/citiesDB')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getCities()
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.post('/', async (req, res) => {
  const data = req.body
  try {
    const response = await db.addCity(data)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.put('/', async (req, res) => {
  const data = req.body
  try {
    const response = await db.editCity(data)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.delete('/', async (req, res) => {
  const data = req.body
  console.log(data)
  try {
    const response = await db.deleteCity(data.cityId)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

module.exports = router
