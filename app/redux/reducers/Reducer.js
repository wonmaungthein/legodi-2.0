import categoriesListEnglish from '../../__mock-api/categories-list-en.json'
const categoryList = categoriesListEnglish

const CategoryList = (state = categoryList, action) => {
  switch (action.type) {
    case 'update':
      return {...state, ...{categoryList: action.data}}

    case 'reset':
      return {...state, ...{categoriesListEnglish}}

    default:
      return state
  }
}

export default CategoryList
