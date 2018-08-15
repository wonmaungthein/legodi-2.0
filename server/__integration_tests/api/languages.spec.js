const request = require('supertest')
const language = require('../../app')

describe('CRUD /languages', () => {
    it('should respond with 200', () => {
        return request(language)
        .get('/api/languages')
        .set('Accept', 'application/json')
        .expect(200)
    })

    it('should add new languages', () => {
        const data = {
            "languageId": "fr",
            "shortName": "fr",
            "longName": "french",
            "originalName": "french"
        }
        return request(language)
        .post('/api/languages')
        .send(data)
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            expect(response.body.success).toEqual(true)
        })
    })

    it('should edit new languages', () => {
        const data = {
            languageId: 'en',
            shortName: 'ar',
            longName: 'arabic',
            originalName: 'arabic'
        }
        return request(language)
        .put('/api/languages')
        .send(data)
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            expect(response.body.success).toEqual(true)
        })
    })

    it('should delete new languages', () => {
        const languageId = 'en';
        return request(language)
        .delete(`/api/languages/?languageId=${languageId}`)
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            expect(response.body.success).toEqual(true)
        })
    })
})
