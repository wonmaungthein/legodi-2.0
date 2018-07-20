import categories from '../../redux/reducers/categories'
import * as Types from '../../redux/actions/types'
import categoriesListEnglish from '../../__mock-api/categories-list-en.json'

describe('CategoryList', () => {
  test('FETCH_CATEGORIES_SUCCESS', () => {
    let state = {
      categoriesList: [],
      articlesInCategory: [{ title: 'firstArticle' }]
    }
    let result = categories(state, {
      type: Types.FETCH_CATEGORIES_SUCCESS,
      categories: categoriesListEnglish
    })
    let newResult = {
      categoriesList: categoriesListEnglish,
      articlesInCategory: [{ title: 'firstArticle' }]
    }
    expect(result).toEqual(newResult)
  })
})
