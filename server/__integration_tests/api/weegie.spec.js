const request = require('supertest')
const weegie = require('../../app')

describe('CRUD /weegie questions', () => {
    it('should respond with 200', () => {
        return request(weegie)
        .get('/api/weegie')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
