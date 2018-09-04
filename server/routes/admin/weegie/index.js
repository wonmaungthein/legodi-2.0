const express = require('express')
const db = require('../../../dbClients/weegieQuestionDB')

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

router.get('/', ensureAuthenticated, async (req, res) => res.render('weegie-menu'))

router.get('/questions/view', async (req, res) => {
  try {
    const data = await db.getQuestions()
    res.render('weegie-table-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/questions/view/:questionId', async (req, res) => {
  const { questionId } = req.params
  try {
    const data = await db.getQuestion(questionId)
    res.render('weegie-question-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get(
  '/questions/add',
  async (req, res) => res.render('weegie-add')
)

router.post('/questions/add', async (req, res) => {
  const { body } = req
  try {
    await db.addQuestion(body)
    res.redirect('/admin/weegie/questions/view')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/questions/edit', async (req, res) => {
  try {
    const data = await db.getQuestions()
    res.render('weegie-table-edit', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/questions/delete/:questionId', async (req, res) => {
  const { questionId } = req.params
  try {
    await db.deleteQuestion(questionId)
    res.redirect('/admin/weegie/questions/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/questions/edit/:questionId', async (req, res) => {
  const { questionId } = req.params
  try {
    const question = await db.getQuestion(questionId)
    const data = question[0]
    res.render('weegie-add', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.post('/questions/edit/:questionId', async (req, res) => {
  const { questionId } = req.params
  const { body } = req
  try {
    await db.editQuestion(questionId, body)
    res.redirect('/admin/weegie/questions/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

router.post('/questions/add', async (req, res) => {
  const { body } = req
  try {
    await db.addQuestion(body)
    res.redirect('/admin/weegie/questions/view')
  } catch (error) {
    res.render('error', { error })
  }
})

module.exports = router
