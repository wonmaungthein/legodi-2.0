import store from '../store/store'

// redux Action
const CategoryList = {
  // Dispatch an action type updateCategories
  UpdateCategory: (data) => (
    store.dispatch({type: 'updateCategories', data})
  ),
  ResetS: () => (
    store.dispatch({type: 'resetCategories'})
  )
}

export default CategoryList
