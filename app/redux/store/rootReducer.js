import {combineReducers} from 'redux'
import categories from '../reducers/categories'
import {WeegieGame, WeegieGameAnswers} from '../reducers/weegieGame'
import {Setting} from '../reducers/setting'

const rootReducer = combineReducers({
  categories,
  WeegieGame,
  WeegieGameAnswers,
  Setting
})

export default rootReducer
