import * as Types from '../actions/types'

export const Setting = (
  state = { city: 'Glasgow', language: 'en' },
  action
) => {
  switch (action.type) {
    case Types.UPDATE_CITY:
      return { ...state, ...{ city: action.city } }
    case Types.UPDATE_LANGUAGE:
      return { ...state, ...{ language: action.language } }
    default:
      return state
  }
}
