const language = require('../../dbClients/languageDB')

describe('CRUD /languages', () => {
    it('should respond with 200', async () => {
        const result = [
            {
                "language_id": "en",
                "long_name": "english",
                "original_name": "english",
                "short_name": "en"
            },
            {
                "language_id": "ar",
                "long_name": "arabic",
                "original_name": "عربي",
                "short_name": "ar"
            }]
        const response = await language.getLanguages();
        expect(response).toEqual(result)
    })

    it('should respond with 200', async () => {
        const data = {
            languageId: 'in',
            shortName: 'in',
            longName: 'indian',
            originalName: 'indian'
        }
        const response = await language.addLanguage(data);
        expect(response.rowCount).toEqual(1)
    })

    it('should respond with 200', async () => {
        const data = {
            languageId: 'en',
            shortName: 'ar',
            longName: 'arabic',
            originalName: 'arabic'
        }
        const response = await language.editLanguage(data)
        expect(response).toEqual(1)
    })

    it('should respond with 200', async () => {
        const languageId = 'en'
        const response = await language.deleteLanguage(languageId);
        expect(response).toEqual(1)
    })
})
