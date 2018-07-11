import {combineReducers} from 'redux'
import CategoryList from '../reducers/CategoryList'
import Language from '../reducers/Language'

const rootReducer = combineReducers({
  CategoryList,
  Language
})

export default rootReducer
