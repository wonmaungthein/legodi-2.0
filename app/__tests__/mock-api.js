/* eslint-disable no-unused-expressions */

import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import categoriesListEnglish from '../__mock-api/categories-list-en'
import listOfArticles from '../__mock-api/list-of-articles.json'
import gameWeegieQuestions from '../__mock-api/game-weegie-questions.json'
import listOfArabicArticles from '../__mock-api/list-of-articles-in-arabic.json'
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

it('calls the mockApi and return the list of Arabic articles', async () => {
  const data = await mock.onGet('/api/ar').reply(listOfArabicArticles)
  expect(data)
    .resolves
}
)

it('calls the mockApi and return the list of Weegie questions', async () => {
  const data = await mock.onGet('/api/weegie').reply(gameWeegieQuestions)
  expect(data)
    .resolves
}
)