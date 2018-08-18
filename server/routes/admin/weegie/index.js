const express = require("express");
const db = require("../../../dbClients/weegieQuestionDB");

const router = express.Router();

router.get("/", async (req, res) => await res.render("weegie-menu"));

router.get("/questions/view", async (req, res) => {
  try {
    const data = await db.getQuestions();
    res.render("weegie-table-view", { data });
  } catch (error) {
    res.render("error", { error });
  }
});

router.get("/questions/view/:questionId", async (req, res) => {
  const { questionId } = req.params;
  try {
    const data = await db.getQuestion(questionId);
    res.render("weegie-question-view", { data });
  } catch (error) {
    res.render("error", { error });
  }
});

router.get(
  "/questions/add",
  async (req, res) => await res.render("weegie-add")
);

router.post("/questions/add", async (req, res) => {
  const { body } = req;
  try {
    await db.addQuestion(body);
    res.redirect("/admin/weegie/questions/view");
  } catch (error) {
    res.render("error", { error });
  }
});

router.get("/questions/edit", async (req, res) => {
    try {
      const data = await db.getQuestions();
      res.render("weegie-table-edit", { data });
    } catch (error) {
      res.render("error", { error });
    }
  });

  router.get("/questions/delete/:questionId", async (req, res) => {
    const { questionId } = req.params;
    try {
        await db.deleteQuestion(questionId);
        res.redirect("/admin/weegie/questions/edit");
    } catch (error) {
      res.render("error", { error });
    }
  });

module.exports = router;
