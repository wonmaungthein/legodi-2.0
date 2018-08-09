const request = require('supertest')
const language = require('../../app')

describe('CRUD /languages', () => {
    it('should respond with 200', () => {
        return request(app).get('/languages').then(response => {
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
        return request(language).post('/languages/add', data).then(response => {
            // New languages added
            const expectedBody = {
                language_id: 'en',
                short_name: 'en',
                long_name: 'english',
                original_name: 'english',
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
        return request(language).put('/languages/edit', data).then(response => {
            // New languages added
            const expectedBody = {
                language_id: 'ar',
                short_name: 'ar',
                long_name: 'arabic',
                original_name: 'arabic',
                success: true
            }
            expect(response.body).toEqual(expectedBody)
        })
    })

    it('should delete new languages', () => {
        const languageId = 'en';
        return request(language).delete('/languages/delete', languageId).then(response => {
            // New languages added
            const expectedBody = {success: true}
            expect(response.body).toEqual(expectedBody)
        })
    })
})