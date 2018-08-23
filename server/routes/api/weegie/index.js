const express = require('express')
const db = require('../../../dbClients/weegieQuestionDB')

const router = express.Router()

router.get('/quiz/questions', async (req, res) => {
    try {
        const response = await db.getQuestions()
        res.status(200).json(response)
    } catch (error) {
        res.status(502).json(error)
    }
})

router.post('/quiz/answer', (req, res) => {

    findQuestionCb = (err, data) => {

        if (err) { return err }
        let similarQuestions = [];
        let allQuestions = data;
        let userAnswer = req.body;

        allQuestions.map((question) => {
            userAnswer.map((answer) => {
                if (question._id == answer.title) {
                    similarQuestions.push(question);
                }
            })
        })

        checkAnswers = (questions, answers) => {
            let result = {};
            let wrongAnswersList = [];
            let corretAnswers = 0;
            let wrongAnswers = 0;
            answers.map((answer) => {
                questions.map((question) => {
                    if (question._id == answer.title) {
                        if (question.answer === answer.answer) {
                            corretAnswers++
                        } else {
                            wrongAnswers++;
                            wrongAnswersList.push(question);
                        }
                    }
                })
            })
            result.wrongAnswersList = wrongAnswersList;
            result.correctAnswers = corretAnswers
            result.wrongAnswers = wrongAnswers;
            res.send(result)
        }
        checkAnswers(similarQuestions, userAnswer)
    }

    WeegieDB.findQuestions({}, findQuestionCb);
})

module.exports = router