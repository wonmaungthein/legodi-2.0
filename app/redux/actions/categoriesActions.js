
import * as Types from './types'
import * as api from '../../helpers/api'

export const fetchCategories = (languageId, cityId) => {
  return async dispatch => {
    dispatch({ type: Types.FETCH_CATEGORIES })

    try {
      const { data: categories } = await api.getCategories(languageId, cityId)

      dispatch({
        type: Types.FETCH_CATEGORIES_SUCCESS,
        categories
      })
    } catch (err) {
      dispatch({
        type: Types.FETCH_CATEGORIES_ERROR,
        error: err
      })
    }
  }
}

export const fetchArticles = (categoryId, language) => {
  return async dispatch => {
    // dispatch({type: Types.FETCH_ARTICLES})

    try {
      const { data: articles } = await api.getArticles(categoryId, language)

      dispatch({
        type: Types.FETCH_ARTICLES_SUCCESS,
        articles
      })
    } catch (err) {
      dispatch({
        type: Types.FETCH_ARTICLES_ERROR,
        error: err
      })
    }
  }
}
