exports.seed = async (knex, Promise) => {
  await knex("weegie")
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
};
