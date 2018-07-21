const wegeGameQuestions = require('./game-weegie-questions.json')

// compare weegie game question with the answers
function compareAnswers (userAnswers) {
  let similarQuestions = []

  wegeGameQuestions.map((question) => {
    userAnswers.map((answer) => {
      if (question._id === answer.title) {
        similarQuestions.push(question)
      }
    })
  })

  const checkAnswers = (questions, answers) => {
    let result = {}
    let wrongAnswersList = []
    let correctAnswers = 0
    let wrongAnswers = 0
    answers.map((answer) => {
      questions.map((question) => {
        if (question._id === answer.title) {
          if (question.answer === answer.answer) {
            correctAnswers++
          } else {
            wrongAnswers++
            wrongAnswersList.push(question)
          }
        }
      })
    })
    result.wrongAnswersList = wrongAnswersList
    result.correctAnswers = correctAnswers
    result.wrongAnswers = wrongAnswers
    return result
  }
  return checkAnswers(similarQuestions, userAnswers)
}

module.exports = {
  compareAnswers
}
