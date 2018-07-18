import * as Types from '../actions/types'

const INITIAL_STATE = {
  weegieQuestions: []
}
const WeegieGame = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_WEEGIE_QUESTIONS_SUCCESS:
      return { ...state, weegieQuestions: action.weegieQuestions }

    case Types.FETCH_WEEGIE_QUESTIONS_ERROR:
      return { ...state, error: action.error, weegieQuestions: [] }

    default:
      return state
  }
}

export default WeegieGame
