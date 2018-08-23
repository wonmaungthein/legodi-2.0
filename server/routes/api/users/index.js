const express = require('express')
const db = require('../../../dbClients/usersDB')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getUsers()
    res.status(200).json({ success: true, response })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

router.get('/email', async (req, res) => {
  const { email } = req.query
  try {
    const response = await db.getUserByEmail(email)
    res.status(200).json({ success: true, response })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

router.post('/', async (req, res) => {
  const data = req.body
  try {
    await db.addUser(data)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

router.put('/', async (req, res) => {
  const data = req.body
  try {
    await db.editUser(data)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

router.delete('/', async (req, res) => {
  const { userId } = req.query
  try {
    await db.deleteUser(userId)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(502).json({ success: false, error })
  }
})

module.exports = router
