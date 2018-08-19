const request = require('supertest')
const users = require('../../app')

describe('CRUD /users', () => {
  it('should respond with 200', () => {
    return request(users)
      .get('/admin/users')
      .set('Accept', 'application/json')
      .expect(200)
  })

  it('should respond with 200', () => {
    return request(users)
      .get('/admin/users/email/?email=dwinatech@hotmail.com')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.statusCode).toEqual(200)
      })
  })

  it('should add new user and respond with value equal true', () => {
    const data = {
      fullName: 'Mohammed Dwina',
      email: 'dwinatech@hotmail.com',
      password: 1234
    }
    return request(users)
      .post('/admin/users')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true)
      })
  })

  it('should edit user and respond with value equal true', () => {
    const data = {
      userId: 1,
      fullName: 'Mohammed Dwina',
      email: 'dwinatech@hotmail.com',
      password: 12345
    }
    return request(users)
      .put('/admin/users')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true)
      })
  })

  it('should delete a user and respond with value equal true', () => {
    const userId = 1
    return request(users)
      .delete(`/admin/users/?userId=${userId}`)
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.success).toEqual(true)
      })
  })
})
