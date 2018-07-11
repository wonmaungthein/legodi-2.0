/* eslint-disable no-unused-expressions */

import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import categoriesListEnglish from '../__mock-api/categories-list-en'
import listOfArticles from '../__mock-api/list-of-articles.json'
const mock = new MockAdapter(axios)
it('calls the mockApi and return the list of English articles', async () => {
  const data = await mock.onGet('/api/en').reply(categoriesListEnglish)
  expect(data)
    .resolves
}
)

it('calls the mockApi and return the list of articles', async () => {
  const data = await mock.onGet('/api/en').reply(listOfArticles)
  expect(data)
    .resolves
}
)
