const knex = require('./connection')

function getCities () {
  return knex.select().from('cities')
};

function addCity (data) {
  return knex.table('cities').insert({
    city_id: data.city_id,
    city_name: data.city_name
  })
};

function getCity (id) {
  return knex
    .select()
    .from('cities')
    .where('city_id', '=', id)
}

function editCity (data) {
  return knex.table('cities')
    .where('city_id', '=', data.city_id)
    .update({
      city_id: data.city_id,
      city_name: data.city_name
    })
};

function deleteCity (cityId) {
  return knex.table('cities')
    .where('city_id', '=', cityId)
    .del()
};

module.exports = {
  deleteCity,
  editCity,
  addCity,
  getCity,
  getCities
}
