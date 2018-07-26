import {combineReducers} from 'redux'
import categories from '../reducers/categories'
import language from '../reducers/language'
import {WeegieGame, WeegieGameAnswers} from '../reducers/weegieGame'
import {City} from '../reducers/city'

const rootReducer = combineReducers({
  categories,
  language,
  WeegieGame,
  WeegieGameAnswers,
  City
})

export default rootReducer
