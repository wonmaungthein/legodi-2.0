import * as Types from '../actions/types'

const INITIAL_STATE = {
  citiesList: [],
  error: ''
}
const CitiesList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_CITIES: {
      return {
        ...state,
        error: ''
      }
    }
    case Types.FETCH_CITIES_SUCCESS: {
      console.log('cities came back:', action.cities)
      return { ...state, citiesList: action.cities }
    }

    case Types.FETCH_CITIES_ERROR:
      return { ...state, citiesList: [], error: action.error }

    default:
      return state
  }
}

export default CitiesList
