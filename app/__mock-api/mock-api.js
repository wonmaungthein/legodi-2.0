import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import categoriesListEnglish from './categories-list-en'
import listOfArticles from './list-of-articles.json'
import listOfArticlesInArabic from './list-of-articles-in-arabic.json'
import wegeGameQuestions from './game-weegie-questions.json'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// arguments for reply are (status, data, headers)
mock.onGet('/api/en').reply(200, categoriesListEnglish)

// mock data for welcome articles
const welcomeArticles = listOfArticles.filter(article => {
  return article.category._id === '5a256e431aefb70014e3a24b'
})

// mock end point for welcome articles
mock.onGet('/api/en/5a256e431aefb70014e3a24b').reply(200, welcomeArticles)

// mock data for welcome articles in Aarabic
const welcomeArticlesInArabic = listOfArticlesInArabic.filter(article => {
  return article.category._id === '5a256e431aefb70014e3a24b'
})

// mock end point for welcome articles in Arabic
mock.onGet('/api/ar/5a256e431aefb70014e3a24b').reply(200, welcomeArticlesInArabic)

// mock data for asylum articles
const asylumArticles = listOfArticles.filter(article => {
  return article.category._id === '5a180fa0cbb54500148c1cc1'
})
// mock end point for asylum articles
mock.onGet('/api/en/5a180fa0cbb54500148c1cc1').reply(200, asylumArticles)

// mock data for asylum articles in Arabic
const asylumArticlesInArabic = listOfArticlesInArabic.filter(article => {
  return article.category._id === '5a180fa0cbb54500148c1cc1'
})

// mock end point for asylum articles in Arabic
mock.onGet('/api/ar/5a180fa0cbb54500148c1cc1').reply(200, asylumArticlesInArabic)

// mock end poing for Weegie Game Questions
mock.onGet('/api/weegie').reply(200, wegeGameQuestions)
