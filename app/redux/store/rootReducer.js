import { combineReducers } from 'redux'
import categories from '../reducers/categories'
import { WeegieGame, WeegieGameAnswers } from '../reducers/weegieGame'
import { Setting } from '../reducers/setting'
import nav from '../reducers/nav'
import languages from '../reducers/languages'
import cities from '../reducers/cities'

const rootReducer = combineReducers({
  categories,
  WeegieGame,
  WeegieGameAnswers,
  Setting,
  nav,
  languages,
  cities
})

export default rootReducer
