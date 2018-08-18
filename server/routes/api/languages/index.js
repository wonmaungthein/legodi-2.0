const express = require('express')
const db = require('../../../dbClients/languageDB')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await db.getLanguages()
        res.status(200).json({ success: true, response })
    } catch (error) {
        res.status(502).json({ success: false, error })
    }
})

router.post('/', async (req, res) => {
    const data = req.body
    try {
        await db.addLanguage(data)
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(502).json({ success: false, error })
    }
})

router.put('/', async (req, res) => {
    const data = req.body
    try {
        await db.editLanguage(data)
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(502).json({ success: false, error })
    }
})

router.delete('/', async (req, res) => {
    const { languageId } = req.query
    try {
        await db.deleteLanguage(languageId)
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(502).json({ success: false, error })
    }
})

module.exports = router
