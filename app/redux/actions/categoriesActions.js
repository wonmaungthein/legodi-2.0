
import * as Types from './types'
import * as api from '../../helpers/api'

export const fetchCategories = () => {
  return async dispatch => {
    dispatch({type: Types.FETCH_CATEGORIES})

    try {
      const { data: categories } = await api.getCategories()

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
