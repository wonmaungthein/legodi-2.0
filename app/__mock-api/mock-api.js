import categoriesListEnglish from './categories-list-en'

const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/api/en').reply(200, categoriesListEnglish)
