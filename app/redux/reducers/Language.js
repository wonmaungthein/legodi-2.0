const Language = (state = { language: 'English' }, action) => {
  switch (action.type) {
    case 'updateLanguage':
      console.log(action.language)
      return { ...state, ...{ language: action.language } }

    case 'reset':
      return { ...state, ...{ language: 'English' } }

    default:
      return state
  }
}

export default Language
