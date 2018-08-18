const knex = require('./connection')

function getLanguages () {
  return knex.select().from('languages')
};

function addLanguage (data) {
  return knex.table('languages').insert({
    language_id: data.languageId,
    long_name: data.longName,
    short_name: data.shortName,
    original_name: data.originalName
  })
};

function editLanguage (data) {
  return knex.table('languages')
    .where('language_id', '=', data.languageId)
    .update({
      language_id: data.languageId,
      long_name: data.longName,
      short_name: data.shortName,
      original_name: data.originalName
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
  addLanguage
}
