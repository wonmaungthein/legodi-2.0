import * as Types from '../actions/types'

const CategoryList = (state = {categoriesList: []}, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORIES_SUCCESS:
      return {...state, categoriesList: action.categories}

    default:
      return state
  }
}

export default CategoryList
