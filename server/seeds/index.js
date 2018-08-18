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
  await knex('categories').del().then(function () {
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

  await knex('users').del().then(() => {
    return knex('users').insert([
      {
        full_name: 'Mohammed Dwina',
        email: 'dwinatech@hotmail.com',
        password: 1234
      },
      {
        full_name: 'Khaled',
        email: 'khaled@hotmail.com',
        password: 1234
      },
      {
        full_name: 'Jason',
        email: 'jason@hotmail.com',
        password: 1234
      },
      {
        full_name: 'Won',
        email: 'won@hotmail.com',
        password: 1234
      }
    ])
  })

  return knex("weegie")
    .del()
    .then(() => {
      return knex("weegie").insert([
        {
          title: "What does Aye Mean",
          answer: "b"
        },
        {
          title: "what does wee mean ",
          answer: "c"
        },
        {
            title: "What does How no mean",
            answer: "b"
          },
          {
            title: "what is glaikit expression mean ?",
            answer: "a"
          },
          {
            title: "What does ya dancer! Mean",
            answer: "b"
          },
          {
            title: "what does Pack it in mean ",
            answer: "d"
          }
      ]);
    });
}
