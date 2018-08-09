var express = require('express')
var router = express.Router()
const categoryClient = require('../../../dbClients/categoriesDB')
const articleClient = require('../../../dbClients/articlesDB')
const path = require('path')
const imagesDir = path.dirname(require.main.filename) + '/../public/images'

router.get('/', (req, res, next) => {
  const callback = (error, articles) => {
    if (error) {
      next(error)
    } else {
      res.render('articles-list', {
        articles: articles,
        addArticle: 'true',
        articlehome: 'homeNav'
      })
    }
  }
  articleClient.findArticles({}, callback)
})

router.get('/add', (req, res, next) => {
  const callback = (error, categories) => {
    if (error) {
      next(error)
    } else {
      res.render('admin-add-article', {
        categories,
        addArticlehome: 'homeNav'
      })
    }
  }
  categoryClient.findCategories(callback)
})

router.post('/add', function (req, res, next) {
  let query = req.body
  if (Object.keys(req.files).length > 0) { query.articleImage = req.files.articleImage.name }
  const callBack = (articleData) => {
    if (Object.keys(req.files).length > 0) {
      query.articleImage = req.files.articleImage.name
      const articleImage = req.files.articleImage
      // const filename = articleData._id
      articleImage.mv(`${imagesDir}/${articleData._id}.png`, function (err) {
        if (err) {
          console.log(err)
          res.send(' error accurd')
        } else {
          console.log('the image has uloaded')
        }
      })
    }
    res.redirect('/')
  }
  articleClient.addArticle(query, callBack)
})
let ensureAuthenticated
router.get('/edit/:articleId', ensureAuthenticated, (req, res, next) => {
  const { articleId } = req.params
  const categoriesCallback = (error, categories) => {
    if (error) {
      next(error)
    } else {
      let articleCallback = (error, article) => {
        if (error) {
          next(error)
        } else {
          let CategorySelected = ''
          let categoriesList = []

          categories.map((category) => {
            if (article.category.equals(category._id)) {
              CategorySelected = category.title
            } else {
              categoriesList.push(category)
            }
          })
          res.render('admin-edit-article', {
            article: article,
            categories: categoriesList,
            CategorySelected: CategorySelected,
            editArticleHome: 'homeNav'
          })
        }
      }
      articleClient.findArticleById(articleId, articleCallback)
    }
  }
  categoryClient.findCategories(categoriesCallback)
})

router.post('/delete/:articleId', (req, res, next) => {
  const { articleId } = req.params
  const callBack = (error, data) => {
    if (error) {
      next(error)
    } else {
      if (data.title === req.body.validationTitle) {
        let deleteCallBack = () => {
          res.redirect('/')
        }
        articleClient.removeArticle(articleId, deleteCallBack)
      } else {
        res.render('delete-title-wrong')
      }
    }
  }
  articleClient.findArticleById(articleId, callBack)
})

router.post('/edit/:articleId', function (req, res, next) {
  const { articleId } = req.params
  let query = req.body
  if (Object.keys(req.files).length > 0) { query.articleImage = req.files.articleImage.name }
  console.log(query)
  const callBack = (articleData) => {
    if (Object.keys(req.files).length > 0) {
      const articleImage = req.files.articleImage
      const filename = articleId
      articleImage.mv(`${imagesDir}/${filename}.png`, function (err) {
        if (err) {
          console.log(err)
          res.send(' error accurd')
        } else {
          console.log('the image has uloaded')
        }
      })
    }
    res.redirect('/')
  }

  articleClient.editArticle(articleId, query, true, callBack)
})

module.exports = router
