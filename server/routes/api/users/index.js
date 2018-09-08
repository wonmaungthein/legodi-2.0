const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const secret = require('../authentication/config')
const db = require('../../../dbClients/usersDB')

require('../authentication')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await db.getUsers()
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const response = await db.getUserById(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.get('/email', async (req, res) => {
  const { email } = req.query
  try {
    const response = await db.getUserByEmail(email)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.put('/', async (req, res) => {
  const data = req.body
  try {
    const response = await db.editUser(data)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.delete('/', async (req, res) => {
  const { userId } = req.query
  try {
    const response = await db.deleteUser(userId)
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json('You have logged successfully')
})

router.post('/signup', async (req, res) => {
  const data = req.body
  try {
    const user = await db.getUserByEmail(data.email)
    if (user.length > 0) {
      res.status(403).json('User is already exist')
    } else {
      const response = await db.addUser(data)
      res.status(200).json(response)
    }
  } catch (error) {
    res.status(502).json(error)
  }
})

router.post('/login', async (req, res) => {
  const { password, email } = req.body
  try {
    const response = await db.getUserByEmail(email)
    if (response.length > 0) {
      db.comparePassword(password, response[0].password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          const token = jwt.sign({
            sub: response[0].user_id
          }, process.env.JWT_SECRET || secret)
          res.status(200).json({token})
        } else {
          res.status(403).json('Sorry password is not match')
        }
      })
    } else {
      res.status(404).json('User is not exist')
    }
  } catch (error) {
    res.status(502).json(error)
  }
})

module.exports = router
