import categories from '../../redux/reducers/categories'
import * as Types from '../../redux/actions/types'
import articles from '../../__mock-api/list-of-articles'

describe('getArticles', () => {
  test('FETCH_ARTICLES_SUCCESS', () => {
    let state = {
      categoriesList: [{ title: 'firstCategory' }],
      articlesInCategory: [{ title: 'firstArticle' }]
    }
    let result = categories(state, {
      type: Types.FETCH_ARTICLES_SUCCESS,
      articles
    })
    let newResult = {
      articlesInCategory: articles,
      categoriesList: [{ title: 'firstCategory' }]
    }
    expect(result).toEqual(newResult)
  })
})

describe('getArticles', () => {
  test('FETCH_ARTICLES_ERROR', () => {
    let state = {
      categoriesList: [{ title: 'firstCategory' }],
      articlesInCategory: [{ title: 'firstArticle' }]
    }
    let result = categories(state, {
      type: Types.FETCH_ARTICLES_ERROR,
      error: 'Bad Request'
    })
    let newResult = {
      articlesInCategory: [],
      error: 'Bad Request',
      categoriesList: [{ title: 'firstCategory' }]

    }
    expect(result).toEqual(newResult)
  })
})
