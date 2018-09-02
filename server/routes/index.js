const express = require('express')
const router = express.Router()

var ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    // req.flash('error_msg','You are not logged in');
    // res.redirect('/users/login')
    return next()
  }
}

// Get Homepage
router.get('/', ensureAuthenticated, (req, res, next) => {
  res.render('login', {layout: false})
})

// Get Homepage
router.get('/dashboard', ensureAuthenticated, (req, res, next) => {
  res.render('index')
})

module.exports = router
