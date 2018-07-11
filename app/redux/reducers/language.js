import * as Types from '../actions/types'

const Language = (state = { language: 'English' }, action) => {
  switch (action.type) {
    case Types.UPDATE_LANGUAGE:
      return { ...state, ...{ language: action.language } }

    default:
      return state
  }
}

export default Language
