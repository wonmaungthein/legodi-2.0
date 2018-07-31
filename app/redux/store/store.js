import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { middleware } from '../../navigation/MainTabNavigator';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
