const knex = require('./connection')

function getLanguages () {
  return knex.select().from('languages')
};

function addLanguage(data) {
  return knex.table('languages').insert({
    language_id: data.language_id,
    long_name: data.long_name,
    short_name: data.short_name,
    original_name: data.original_name
  });
};

function getLanguage(id) {
  return knex
    .select()
    .from("languages")
    .where("language_id", "=", id);
}

function editLanguage(id,data) {
  return knex.table('languages')
    .where('language_id', '=', id)
    .update({
      language_id: data.language_id,
      long_name: data.long_name,
      short_name: data.short_name,
      original_name: data.original_name
    })
};

function deleteLanguage (languageId) {
  return knex.table('languages')
    .where('language_id', '=', languageId)
    .del()
};

module.exports = {
  deleteLanguage,
  editLanguage,
  getLanguages,
  addLanguage,
  getLanguage
}
