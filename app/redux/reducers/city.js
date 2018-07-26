import * as Types from '../actions/types'

export const City = (state = { city: 'Glasgow' }, action) => {
  switch (action.type) {
    case Types.UPDATE_CITY:
      return { ...state, ...{ city: action.city } }

    default:
      return state
  }
}
