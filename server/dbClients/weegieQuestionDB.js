const knex = require("./connection");

function getQuestions() {
  return knex.select().from("weegie");
}
 

module.exports = {
   getQuestions
};
