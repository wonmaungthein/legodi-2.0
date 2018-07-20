import weegieGame from '../../redux/reducers/weegieGame'
import * as Types from '../../redux/actions/types'
import questions from '../../__mock-api/game-weegie-questions.json'

describe('weegieGame', () => {
  test('getQuestions', () => {
    let state = { weegieQuestions: [] }
    let result = weegieGame(state, {
      type: Types.FETCH_WEEGIE_QUESTIONS_SUCCESS,
      weegieQuestions: questions
    })
    let newResult = { weegieQuestions: questions }
    expect(result).toEqual(newResult)
  })
})

describe('weegieGame', () => {
  test('FETCH_WEEGIE_QUESTIONS_ERROR', () => {
    let state = { weegieQuestions: [] }
    let result = weegieGame(state, {
      type: Types.FETCH_WEEGIE_QUESTIONS_ERROR,
      error: 'Bad Request'
    })
    let newResult = {weegieQuestions: [], error: 'Bad Request'}
    expect(result).toEqual(newResult)
  })
})
