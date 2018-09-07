const express = require('express')
const db = require('../../../dbClients/weegieQuestionDB')

const router = express.Router()

router.get('/quiz', async (req, res) => {
  try {
    const response = await db.getQuestions()
    res.status(200).json(response)
  } catch (error) {
    res.status(502).json(error)
  }
})

router.post('/quiz/answers', async (req, res) => {
  const findQuestionCb = (data) => {
    let similarQuestions = []
    let allQuestions = data
    let userAnswer = req.body
    allQuestions.map((question) => {
      userAnswer.map((answer) => {
        if (question.question_id === answer.title) {
          similarQuestions.push(question)
        }
      })
    })

    const checkAnswers = (questions, answers) => {
      let result = {}
      let wrongAnswersList = []
      let corretAnswers = 0
      let wrongAnswers = 0
      answers.map((answer) => {
        questions.map((question) => {
          if (question.question_id === answer.title) {
            if (question.answer === answer.answer) {
              corretAnswers++
            } else {
              wrongAnswers++
              wrongAnswersList.push(question)
            }
          }
        })
      })
      result.wrongAnswersList = wrongAnswersList
      result.correctAnswers = corretAnswers
      result.wrongAnswers = wrongAnswers
      return result
    }
    return checkAnswers(similarQuestions, userAnswer)
  }

  try {
    const response = await db.getQuestions()
    res.status(200).json(findQuestionCb(response))
  } catch (error) {
    res.status(502).json(error)
  }
})

module.exports = router
