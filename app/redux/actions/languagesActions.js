
import * as Types from './types'
import * as api from '../../helpers/api'

export const fetchLanguages = () => {
  return async dispatch => {
    dispatch({ type: Types.FETCH_LANGUAGES })

    try {
      const { data: languages } = await api.getLanguages()

      dispatch({
        type: Types.FETCH_LANGUAGES_SUCCESS,
        languages
      })
    } catch (err) {
      dispatch({
        type: Types.FETCH_LANGUAGES_ERROR,
        error: err
      })
    }
  }
}
