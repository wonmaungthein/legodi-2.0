const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../../../dbClients/usersDB')

const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login', { layout: false })
})

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  async function (email, password, done) {
    const user = await db.getUserByEmail(email)
    if (user.length === 0) {
      return done(null, false, { message: 'User is not exist' })
    }
    db.comparePassword(password, user[0].password, (err, isMatch) => {
      if (err) throw err
      if (isMatch) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Invalid password' })
      }
    })
  }))

passport.serializeUser(function (user, done) {
  done(null, user[0].user_id)
})

passport.deserializeUser(async (id, done) => {
  const user = await db.getUserById(id)
  done(null, user[0])
})

router.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
  function (req, res) {
    res.redirect('/')
  })

router.get('/logout', (req, res) => {
  req.logout()

  req.flash('success_msg', 'You are logged out')

  res.redirect('/users/login')
})

router.get('/register', (req, res) => {
  res.render('register', { layout: false })
})

router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body
  const data = { fullName, email, password }

  // Validation
  req.checkBody('fullName', 'Name is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password)

  const errors = req.validationErrors()

  if (errors) {
    res.render('register', {
      errors: errors,
      layout: false
    })
  } else {
    try {
      const user = await db.getUserByEmail(email)
      if (user.length > 0) {
        res.render('register', {
          error: 'User is already exist',
          layout: false
        })
      } else {
        await db.addUser(data)
        req.flash('success_msg', 'You are registered successfully, now you can login')
        res.redirect('/users/login')
      }
    } catch (error) {
      res.render('register', {
        errors: errors,
        layout: false
      })
    }
  }
})

module.exports = router
