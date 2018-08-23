import * as Types from '../actions/types'

const INITIAL_STATE = {
  languagesList: []
}
const LanguagesList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_LANGUAGES_SUCCESS:
      return { ...state, languagesList: action.languages }

    case Types.FETCH_LANGUAGES_ERROR:
      return { ...state, languagesList: [], error: action.error }

    default:
      return state
  }
}

export default LanguagesList
