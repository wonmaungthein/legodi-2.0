const Category = require('../../dbClients/categoriesDB')

describe('CRUD /categories', () => {
  it('should respond with 200', async () => {
    const result = [
      {
        'category_name': 'asylum',
        'short_description': 'english hi ',
        'description': 'english hih i',
        'status': 'pending',
        'icon': 'null',
        'language_id': 'en'
      }]
    const response = await Category.getCategories()
    expect(response).toEqual(result)
  })

  it('should respond with 200', async () => {
    const data = {
      'category_name': 'asylum',
      'short_description': 'english hi ',
      'description': 'english hih i',
      'status': 'pending',
      'icon': 'null',
      'language_id': 'en'
    }
    const response = await Category.addCategory(data)
    expect(response.rowCount).toEqual(1)
  })

  it('should respond with 200', async () => {
    const data = {
      'categoryName': 'asylum',
      'shortDescription': 'english hi ',
      'description': 'english hih i',
      'status': 'pending',
      'icon': 'null',
      'language_id': 'en'
    }
    const response = await Category.editCategory(data)
    expect(response).toEqual(1)
  })

  it('should respond with 200', async () => {
    const CategoryId = '19'
    const response = await Category.deleteCategory(CategoryId)
    expect(response).toEqual(1)
  })
})
