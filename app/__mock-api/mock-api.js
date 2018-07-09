import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import categoriesListEnglish from './categories-list-en'
import listOfArticles from './list-of-articles.json'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// arguments for reply are (status, data, headers)
mock.onGet('/api/en').reply(200, categoriesListEnglish)

const welcomeArticles = listOfArticles.filter(article => {
  return article.category._id === '5a256e431aefb70014e3a24b'
})

mock.onGet('/api/en/5a256e431aefb70014e3a24b').reply(200, welcomeArticles)
