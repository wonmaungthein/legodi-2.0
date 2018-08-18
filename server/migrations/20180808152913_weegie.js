exports.up = async (knex, Promise) => {
    await knex.schema.createTable('weegie', table => {
      table.increments('question_id')
      table.string('title').notNullable()
      table.string('answer').notNullable()
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('classes')
  }
  