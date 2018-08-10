const express = require('express')
const db = require('../../../dbClients/languageDB')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await db.getLanguages()
        res.status(200).json({ success: true, response })
    } catch (error) {
        console.log(error);
        res.status(502).json({ success: false, error })
    }
})

router.post('/', async (req, res) => {
    const data = req.body
    try {
        const response = await db.addLanguage(data)
        res.status(200).json({ success: true, response })
    } catch (error) {
        console.log(error);
        res.status(502).json({ success: false, error })
    }
})

router.put('/', async (req, res) => {
    const data = req.body
    try {
        const response = await db.editLanguage(data)
        res.status(200).json({ success: true, response })
    } catch (error) {
        console.log(error)
        res.status(502).json({ success: false, error })
    }
})

router.delete('/', async (req, res) => {
    const languageId = req.body
    try {
        const response = await db.deleteLanguage(languageId)
        res.status(200).json({ success: true, response })
    } catch (error) {
        console.log(error)
        res.status(502).json({ success: false, error })
    }
})

module.exports = router
