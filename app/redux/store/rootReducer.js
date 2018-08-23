import {combineReducers} from 'redux'
import categories from '../reducers/categories'
import {WeegieGame, WeegieGameAnswers} from '../reducers/weegieGame'
import {Setting} from '../reducers/setting'
import nav from '../reducers/nav'
import languages from '../reducers/languages'

const rootReducer = combineReducers({
  categories,
  WeegieGame,
  WeegieGameAnswers,
  Setting,
  nav,
  languages
})

export default rootReducer
