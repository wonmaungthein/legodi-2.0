exports.up = async (knex, Promise) => {
  await knex.schema.createTable('languages', table => {
    table.string('language_id').primary()
    table.string('short_name')
    table.string('long_name')
    table.string('original_name')
  })

  await knex.schema.createTable('categories', table => {
    table.increments('category_id')
    table.string('category_name')
    table.string('short_description')
    table.string('description')
    table.enum('status', ['pending', 'approved', 'rejected', 'hidden'])
    table.string('icon')
    table.string('language_id').defaultTo('en')
    table.foreign('language_id').references('language_id').inTable('languages')
  })

  return knex.schema.createTable('articles', table => {
    table.increments('article_id')
    table.string('title').notNullable()
    table.string('short_content').notNullable()
    table.string('full_content').notNullable()
    table.integer('category_id').notNullable()
    table.foreign('category_id').references('category_id').inTable('categories')
    table.string('image')
    table.enum('status', ['pending', 'approved', 'rejected', 'hidden'])

    table.integer('sort_order')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('classes')
}
