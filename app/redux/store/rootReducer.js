import {combineReducers} from 'redux'
import categories from '../reducers/categories'
import language from '../reducers/language'
import WeegieGame from '../reducers/weegieGame'

const rootReducer = combineReducers({
  categories,
  language,
  WeegieGame
})

export default rootReducer
