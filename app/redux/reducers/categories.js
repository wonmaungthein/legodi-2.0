import * as Types from '../actions/types'

const INITIAL_STATE = {
  categoriesList: [],
  articlesInCategory: []
}
const CategoryList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesList: action.categories }

    case Types.FETCH_ARTICLES_SUCCESS:
      return { ...state, articlesInCategory: action.articles }

    case Types.FETCH_ARTICLES_ERROR:
      return { ...state, articlesInCategory: [], error: action.error }

    default:
      return state
  }
}

export default CategoryList
