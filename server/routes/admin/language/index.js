const express = require('express')
const db = require('../../../dbClients/languageDB')

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

router.get('/', ensureAuthenticated, async (req, res) => res.render('language-menu'))

router.get('/view', async (req, res) => {
  try {
    const data = await db.getLanguages()
    res.render('language-table-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/view/:languageId', async (req, res) => {
  const { languageId } = req.params
  try {
    const data = await db.getLanguage(languageId)
    res.render('language-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/add', async (req, res) => res.render('language-add'))

router.post('/add', async (req, res) => {
  const { body } = req

  try {
    await db.addLanguage(body)
    res.redirect('/admin/language/view')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit', async (req, res) => {
  try {
    const data = await db.getLanguages()
    res.render('language-table-edit', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/delete/:languageId', async (req, res) => {
  const { languageId } = req.params
  try {
    await db.deleteLanguage(languageId)
    res.redirect('/admin/language/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit/:languageId', async (req, res) => {
  const { languageId } = req.params
  try {
    const language = await db.getLanguage(languageId)
    const data = language[0]
    res.render('language-add', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.post('/edit/:languageId', async (req, res) => {
  const { languageId } = req.params
  const { body } = req
  try {
    await db.editLanguage(languageId, body)
    res.redirect('/admin/language/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

module.exports = router
