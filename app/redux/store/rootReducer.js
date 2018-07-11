import {combineReducers} from 'redux'
import categories from '../reducers/categories'
import language from '../reducers/language'

const rootReducer = combineReducers({
  categories,
  language
})

export default rootReducer
