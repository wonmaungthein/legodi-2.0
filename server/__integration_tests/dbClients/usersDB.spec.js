const user = require('../../dbClients/usersDB')

describe('CRUD /users', () => {
  it('should get list of users and respond with 200', async () => {
    const result = [
      {
        full_name: 'Mohammed Dwina',
        email: 'dwinatech@hotmail.com',
        password: 1234
      },
      {
        full_name: 'Khaled',
        email: 'khaled@hotmail.com',
        password: 1234
      },
      {
        full_name: 'Jason',
        email: 'jason@hotmail.com',
        password: 1234
      },
      {
        full_name: 'Won',
        email: 'won@hotmail.com',
        password: 1234
      }
    ]
    const response = await user.getUsers()
    expect(response).toEqual(result)
  })

  it('should add new user and return number of inserted row', async () => {
    const data = {
      full_name: 'Mohammed Dwina',
      email: 'dwinatech@hotmail.com',
      password: 1234
    }
    const response = await language.addUser(data)
    expect(response.rowCount).toEqual(1)
  })

  it('should edit user and return number of edited row', async () => {
    const data = {
      userId: 1,
      full_name: 'Mohammed Dwina',
      emaill: 'dwinatech@hotmail.com',
      password: 12345
    }
    const response = await language.editUser(data)
    expect(response).toEqual(1)
  })

  it('should delete user and return number of deleted row', async () => {
    const userId = 'en'
    const response = await language.deleteUser(languageId)
    expect(response).toEqual(1)
  })
})
