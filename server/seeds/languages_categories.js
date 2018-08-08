exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries

  // await knex('articles').del().then(function () {
  //   // Inserts seed entries
  //   return knex('articles').insert([
  //     {
  //       title: 'Asylum 101',
  //       category_id: 1,
  //       description: 'Asylum Process in UK bla bla bla',
  //       status: 'approved',
  //       language_id: 'en'
  //     },
  //     {
  //       category_name: 'Welcome',
  //       short_description: 'Welcome to Glasgow',
  //       description: 'Welcome to Glasgow',
  //       status: 'approved',
  //       language_id: 'en'
  //     },
  //     {
  //       category_name: 'اللجوء',
  //       short_description: 'لجوء معلومات  كتيرة جداا',
  //       description: 'لاجيء تعبان طالع دينه واسمه خالد',
  //       status: 'approved',
  //       language_id: 'ar'
  //     }
  //   ])
  // })

  await knex('languages').del().then(() => {
    return knex('languages').insert([
      {
        language_id: 'en',
        short_name: 'en',
        long_name: 'english',
        original_name: 'english'
      },
      {
        language_id: 'ar',
        short_name: 'ar',
        long_name: 'arabic',
        original_name: 'عربي'
      }
    ])
  })
  return knex('categories').del().then(function () {
    // Inserts seed entries
    return knex('categories').insert([
      {
        category_name: 'Asylum',
        short_description: 'Asylum Process in UK',
        description: 'Asylum Process in UK bla bla bla',
        status: 'approved',
        language_id: 'en'
      },
      {
        category_name: 'Welcome',
        short_description: 'Welcome to Glasgow',
        description: 'Welcome to Glasgow',
        status: 'approved',
        language_id: 'en'
      },
      {
        category_name: 'اللجوء',
        short_description: 'لجوء معلومات  كتيرة جداا',
        description: 'لاجيء تعبان طالع دينه واسمه خالد',
        status: 'approved',
        language_id: 'ar'
      }
    ])
  })
}
