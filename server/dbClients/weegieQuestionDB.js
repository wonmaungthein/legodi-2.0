const knex = require('./connection')

function getQuestions () {
  return knex.select().from('weegie')
}

function getQuestion (id) {
  return knex
    .select()
    .from('weegie')
    .where('question_id', '=', id)
}

function editQuestion (questionId, data) {
  return knex
    .table('weegie')
    .where('question_id', '=', questionId)
    .update({
      title: data.title,
      answer: data.answer,
      a: data.a,
      b: data.b,
      c: data.c,
      d: data.d
    })
}

function addQuestion (data) {
  return knex.table('weegie').insert({
    title: data.title,
    answer: data.answer,
    a: data.a,
    b: data.b,
    c: data.c,
    d: data.d
  })
}

function deleteQuestion (questionId) {
  return knex.table('weegie')
    .where('question_id', '=', questionId)
    .del()
};

module.exports = {
  getQuestions,
  getQuestion,
  editQuestion,
  addQuestion,
  deleteQuestion
}
