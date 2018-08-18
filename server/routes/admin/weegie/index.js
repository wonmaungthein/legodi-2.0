const express = require('express')
const db = require('../../../dbClients/weegieQuestionDB')

const router = express.Router()

router.get('/',(req, res) => res.render('admin-weegie'))
router.get('/questions/view',async (req, res) => {
     try {
        const data = await db.getQuestions()
        console.log(data)
        res.render('admin-weegie-view',{data});
    } catch (error) {
        res.render('error',{error});
    }
})
// /admin/weegie/questions/view
module.exports = router
