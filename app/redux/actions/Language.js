import store from '../store/store'

// redux Action
const Language = {
  // Dispatch an action type update language
  updateLanguage: (language) => (
    store.dispatch({type: 'updateLanguage', language})
  ),
  resetLanguage: () => (
    store.dispatch({type: 'reset'})
  )
}

export default Language
