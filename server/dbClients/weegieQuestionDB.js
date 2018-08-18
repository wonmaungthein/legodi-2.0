const knex = require("./connection");

function getQuestions() {
  return knex.select().from("weegie");
}

function getQuestion(id) {
  return knex
    .select()
    .from("weegie")
    .where("question_id", "=", id);
}

function editQuestion(data) {
  return knex.table('weegie')
    .where('question_id', '=', data.question_id)
    .update({
      question_id: data.question_id,
      title: data.title,
      answer: data.anser,
    })
};

module.exports = {
  getQuestions,
  getQuestion,
  editQuestion
};
