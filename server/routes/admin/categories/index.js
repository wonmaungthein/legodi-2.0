const express = require('express')
const db = require('../../../dbClients/categoriesDB')

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

router.get('/', ensureAuthenticated, async (req, res) => res.render('category-menu'))

router.get('/view', async (req, res) => {
  try {
    const data = await db.getCategories()
    res.render('category-table-view', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/view/:categoryId', async (req, res) => {
  const { categoryId } = req.params
  try {
    const data = await db.getCategoryById(categoryId)
    res.render('category-view', { data: data[0] })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/add', async (req, res) => res.render('category-add'))

router.post('/add', async (req, res) => {
  const { body } = req
  try {
    await db.addCategory(body)
    res.redirect('/admin/categories/view')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit', async (req, res) => {
  try {
    const data = await db.getCategories()
    res.render('category-table-edit', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/delete/:categoryId', async (req, res) => {
  const { categoryId } = req.params
  try {
    await db.deleteCategory(categoryId)
    res.redirect('/admin/categories/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

router.get('/edit/:categoryId', async (req, res) => {
  const { categoryId } = req.params
  try {
    const category = await db.getCategoryById(categoryId)
    const data = category[0]
    res.render('category-add', { data })
  } catch (error) {
    res.render('error', { error })
  }
})

router.post('/edit/:categoryId', async (req, res) => {
  const { categoryId } = req.params
  const { body } = req
  try {
    await db.editCategory(categoryId, body)
    res.redirect('/admin/categories/edit')
  } catch (error) {
    res.render('error', { error })
  }
})

module.exports = router
