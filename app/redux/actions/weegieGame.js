
import * as Types from './types'
import * as api from '../../helpers/api'

export const fetchWeegieGameQuestions = () => {
  return async dispatch => {
    dispatch({ type: Types.FETCH_WEEGIE_QUESTIONS })

    try {
      const { data: weegieQuestions } = await api.getWeegieQuestions()
      dispatch({
        type: Types.FETCH_WEEGIE_QUESTIONS_SUCCESS,
        weegieQuestions
      })
    } catch (err) {
      dispatch({
        type: Types.FETCH_WEEGIE_QUESTIONS_ERROR,
        error: err
      })
    }
  }
}

export const fetchWeegieGameAnswer = (data) => {
  return async dispatch => {
    dispatch({ type: Types.FETCH_WEEGIE_ANSWERS })

    try {
      const weegieGameAnsers = await api.getWeegieGameAnswers(data)
      dispatch({
        type: Types.FETCH_WEEGIE_ANSWERS_SUCCESS,
        weegieGameAnsers
      })
    } catch (err) {
      dispatch({
        type: Types.FETCH_WEEGIE_ANSWERS_ERROR,
        error: err
      })
    }
  }
}
