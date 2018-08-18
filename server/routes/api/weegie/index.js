const express = require('express')
const db = require('../../../dbClients/weegieQuestionDB')

const router = express.Router()

router.get('/questions', async (req, res) => {
    try {
        const response = await db.getQuestions()
        res.status(200).json({ success: true, response })
    } catch (error) {
        res.status(502).json({ success: false, error })
    }
})

module.exports = router