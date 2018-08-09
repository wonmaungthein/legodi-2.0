const request = require('supertest')
const app = require('../../app')

describe('GET /articles/ar', () => {
  it('should respond with 200', () => {
    return request(app).get('/articles/ar').then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  it('should respond with articles in Arabic', () => {
    return request(app).get('/articles/ar').then(response => {
      // update  this to expected body
      const expectedBody = [
        {
          article_id: '1',
          full_content: 'asdomee'
        }
      ]
      expect(response.body).toEqual(expectedBody)
    })
  })
})
