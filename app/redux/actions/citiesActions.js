import * as Types from './types'
import * as api from '../../helpers/api'

export const fetchCities = (city) => {
  return async dispatch => {
    dispatch({ type: Types.FETCH_CITIES })

    try {
      const { data: cities } = await api.getCities(city)

      dispatch({
        type: Types.FETCH_CITIES_SUCCESS,
        cities
      })
    } catch (err) {
      dispatch({
        type: Types.FETCH_CITIES_ERROR,
        error: err
      })
    }
  }
}
