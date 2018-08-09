const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

function getLanguages(){
  return knex.select().from("languages");
};

function addLanguage(data){
   return knex.table('languages').insert(data);
};

module.exports = {
    getLanguages,
    addLanguage
}
