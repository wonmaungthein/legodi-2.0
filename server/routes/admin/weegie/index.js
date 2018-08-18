const express = require('express')
const db = require('../../../dbClients/weegieQuestionDB')

const router = express.Router()

router.get('/',(req, res) => res.render('weegie-menu'))
router.get('/questions/view',async (req, res) => {
     try {
        const data = await db.getQuestions()
        console.log(data)
        res.render('weegie-table',{data});
    } catch (error) {
        res.render('error',{error});
    }
})
router.get('/questions/view/:questionId',async (req, res) => {
    const { questionId } = req.params
    try {
       const data = await db.getQuestion(questionId)
       res.render('weegie-question-view',{data});
   } catch (error) {
       res.render('error',{error});
   }
})


 
module.exports = router
