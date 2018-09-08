exports.up = async (knex, Promise) => {
  await knex.schema.createTable('languages', table => {
    table.string('language_id').primary().defaultTo('en')
    table.string('short_name')
    table.string('long_name')
    table.string('original_name')
  })

  await knex.schema.createTable('cities', table => {
    table.string('city_id').primary().defaultTo('GLA')
    table.string('city_name').notNullable()
  })

  await knex.schema.createTable('categories', table => {
    table.increments('category_id')
    table.string('category_name')
    table.string('short_description')
    table.text('description')
    table.enum('status', ['pending', 'approved', 'rejected', 'hidden'])
    table.string('icon')
    table.string('order')
    table.string('language_id').defaultTo('en')
    table.foreign('language_id')
      .references('language_id')
      .inTable('languages')
    table.string('city_id').defaultTo('GLA')
    table.foreign('city_id')
      .references('city_id')
      .inTable('cities')
  })

  await knex.schema.createTable('weegie', table => {
    table.increments('question_id')
    table.string('title').notNullable()
    table.string('answer').notNullable()
    table.string('a').notNullable()
    table.string('b').notNullable()
    table.string('c').notNullable()
    table.string('d').notNullable()
    table.bool('visible').defaultTo(false)
  })

  await knex.schema.createTable('articles', table => {
    table.increments('article_id')
    table.string('title').notNullable()
    table.string('short_content').notNullable()
    table.text('full_content').notNullable()
    table.integer('category_id').notNullable()
    table.foreign('category_id').references('category_id').inTable('categories')
    table.text('image')
    table.enum('status', ['pending', 'approved', 'rejected', 'hidden'])

    table.integer('sort_order')
    table.timestamps(true, true)
  })

  return knex.schema.createTable('users', table => {
    table.increments('user_id')
    table.string('full_name').notNullable()
    table.string('email').notNullable()
    table.string('role').defaultTo('None')
    table.string('password').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable('users')
  await knex.schema.dropTable('weegie')
  await knex.schema.dropTable('articles')
  await knex.schema.dropTable('categories')
  await knex.schema.dropTable('languages')
  await knex.schema.dropTable('cities')
}
