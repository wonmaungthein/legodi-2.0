import language from '../../redux/reducers/language'
import * as Types from '../../redux/actions/types'

describe('language', () => {
  test('UPDATE_LANGUAGE', () => {
    let state = { language: 'English' }
    let result = language(state, {
      type: Types.UPDATE_LANGUAGE,
      language: 'Arabic'
    })
    let newResult = { language: 'Arabic' }
    expect(result).toEqual(newResult)
  })
})
