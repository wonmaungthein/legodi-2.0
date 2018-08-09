const request = require('supertest')
const language = require('../../dbClients/languageDB')

describe('CRUD /languages', () => {
    it('should respond with 200', () => {
        return language.getLanguages().then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it('should return list of languages in json format', () => {
        const data = [
            {
                "language_id": "en",
                "short_name": "en",
                "long_name": "english",
                "original_name": "english"
            },
            {
                "language_id": "ar",
                "short_name": "ar",
                "long_name": "arabic",
                "original_name": "عربي"
            },
            {
                "language_id": "am",
                "short_name": "am",
                "long_name": "amharic",
                "original_name": "amharic"
            }
        ]
        return language.getLanguages().then(response => {
            expect(response).toBe(data)
        })
    })

    it('should add new languages', () => {
        const data = {
            language_id: 'en',
            short_name: 'en',
            long_name: 'english',
            original_name: 'english'
        }
        return language.addLanguage(data).then(response => {
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
})
