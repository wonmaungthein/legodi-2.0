import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import categoriesListEnglish from './categories-list-en'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// arguments for reply are (status, data, headers)
mock.onGet('/api/en').reply(200, categoriesListEnglish)
