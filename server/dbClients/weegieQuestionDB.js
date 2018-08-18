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

module.exports = {
  getQuestions,
  getQuestion
};
