const request = require('supertest')
const server = require('../server').listener

describe('Routes testing', () => {
  // Http get /home page
  it('Render home page', (done) => {
    request(server)
      .get('/')
      .expect(200, done)
  })
  // Http get /categories
  it('It should go to categories endpoint and return list of categories',
    (done) => {
      request(server)
        .get('/categories')
        .set('accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect([
          { name: 'Sport' },
          { name: 'Parks' },
          { name: 'Food' },
          { name: 'Shopping' },
          { name: 'Welcome' },
          { name: 'Asylum' }
        ], done)
    })
})
