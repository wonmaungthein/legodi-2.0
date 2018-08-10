const request = require('supertest')
const language = require('../../app')

describe('CRUD /languages', () => {
    it('should respond with 200', () => {
        return request(language).get('/api/languages').then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it('should add new languages', () => {
        const data = {
            language_id: 'en',
            short_name: 'en',
            long_name: 'english',
            original_name: 'english'
        }
        return request(language).post('/api/languages', data).then(response => {
            const expectedBody = {
                success: true
            }
            expect(response.body).toEqual(expectedBody)
        })
    })

    it('should edit new languages', () => {
        const data = {
            language_id: 'en',
            short_name: 'ar',
            long_name: 'arabic',
            original_name: 'arabic'
        }
        return request(language).put('/api/languages', data).then(response => {
            const expectedBody = {
                success: true
            }
            expect(response.body).toEqual(expectedBody)
        })
    })

    it('should delete new languages', () => {
        const languageId = 'en';
        return request(language).delete('/api/languages', languageId).then(response => {
            const expectedBody = { success: true }
            expect(response.body).toEqual(expectedBody)
        })
    })
})