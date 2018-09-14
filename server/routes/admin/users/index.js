const express = require('express')
const db = require('../../../dbClients/usersDB')

const router = express.Router()

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    req.flash('error_msg', 'You are not logged in')
    res.redirect('/users/login')
    return next()
  }
}

router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const data = await db.getUsers()
    res.render('user-table-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/view/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const data = await db.getUserById(userId)
    res.render('user-view', { data: data[0] })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit/:userId', async (req, res) => {
  const { userId } = req.params
  const user = await db.getUserById(userId)
  try {
    res.render('user-edit', { data: user[0] })
  } catch (error) {
    res.render('error', { error })
  }
})

router.post('/edit/:userId', async (req, res) => {
  const { userId } = req.params
  const { body } = req
  try {
    const user = await db.getUserByEmail(body.email)
    if (user && Number(user[0].user_id) !== Number(userId)) {
      req.flash('error_msg', 'User is already exist')
      res.redirect('/admin/users')
    } else {
      await db.editUser(userId, body)
      res.redirect('/admin/users')
    }
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/delete/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    await db.deleteUser(userId)
    res.redirect('/admin/users')
  } catch (error) {
    res.render('error', { error })
  }
})

module.exports = router
