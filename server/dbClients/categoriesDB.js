const config = require("../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(config);

const getCategories = () => {
  return knex.select().from("categories");
};

const getArticlesByCategoryId = category_id => {
  return knex
    .select()
    .from("articles")
    .where({ category_id });
};

const getCategoryById = category_id => {
  return knex("categories").where({ category_id });
};

const getCategoryByName = async category_name => {
  const category = await knex("categories")
    .where({ category_name })
    .first();
  return category;
};


const getCategoryByLanguage = async language_id => {
  return knex("categories").where({ language_id });
};

const addCategory = data => {
  return knex.table("categories").insert({
    category_id: data.categoryId,
    category_name: data.title,
    short_description: data.short_description,
    description: data.description,
    status: data.status,
    icon: data.image,
    language_id: data.languageId,
    order: data.order
  });
};

const editCategory = (categoryId, data) => {
  return knex
    .table("categories")
    .where("category_id", "=", categoryId)
    .update({
      category_name: data.category_name,
      short_description: data.short_description,
      description: data.description,
      status: data.status,
      icon: data.icon,
      language_id: data.language_id,
      order: data.order
    });
};

const deleteCategory = categoryId => {
  return knex
    .table("categories")
    .where("category_id", "=", categoryId)
    .del();
};

module.exports = {
  getArticlesByCategoryId,
  getCategoryByLanguage,
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
  getCategoryByName,
  getCategoryById
};
