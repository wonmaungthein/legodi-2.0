const language = require('../../dbClients/languageDB')

describe('CRUD /languages', () => {
    it('should respond with 200', () => {
        return language.getLanguages().then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it('should respond with 200', () => {
        const data = {
            language_id: 'en',
            short_name: 'en',
            long_name: 'english',
            original_name: 'english'
        }
        return language.addLanguage(data).then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it('should respond with 200', () => {
        const data = {
            language_id: 'en',
            short_name: 'ar',
            long_name: 'arabic',
            original_name: 'arabic'
        }
        return language.editLanguage(data).then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it('should respond with 200', () => {
        const languageId = 'en'
        return language.deleteLanguage(languageId).then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
})
