import * as Types from './types'
import * as api from '../../helpers/api'

export const fetchCities = () => {
  console.log('function works fine')
  return async dispatch => {
    console.log('dispatching fetch cities 2...')
    dispatch({ type: Types.FETCH_CITIES })

    try {
      const { data: cities } = await api.getCities()
      console.log('got cities back..')
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
