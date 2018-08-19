const express = require("express");
const db = require("../../../dbClients/usersDB");

const router = express.Router();

router.get("/", async (req, res) => await res.render("user-menu"));

router.get("/view", async (req, res) => {
  try {
    const data = await db.getUsers();
    // res.json(data)
    res.render("user-table-view", { data });
  } catch (error) {
    res.render("error", { error });
  }
});

router.get("/view/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await db.getUserById(userId);
    res.render("user-view", { data:data[0] });
  } catch (error) {
    res.render("error", { error });
  }
});

router.get("/add", async (req, res) => await res.render("user-add"));


  router.post("/add", async (req, res) => {
    const { body } = req;
    try {
      await db.addUser(body);
      res.redirect("/admin/users/view");
    } catch (error) {
      res.render("error", { error });
    }
  });

  router.get("/edit", async (req, res) => {
    try {
      const data = await db.getUsers();
      res.render("user-table-edit", { data });
    } catch (error) {
      res.render("error", { error });
    }
  });

router.get("/edit/:userId", async (req, res) => {
   const { userId } = req.params;
   const user = await db.getUserById(userId);
  try {
    const data = await db.getUsers();
    res.render("user-add", { data:user[0] });
  } catch (error) {
    res.render("error", { error });
  }
});

router.post("/edit/:userId", async (req, res) => {
    const { userId } = req.params;
    const { body } = req;
    try {
        await db.editUser(userId,body);
        res.redirect("/admin/users/edit");
      } catch (error) {
        res.render("error", { error });
      }
  });

router.get("/delete/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    await db.deleteUser(userId);
    res.redirect("/admin/users/edit");
  } catch (error) {
    res.render("error", { error });
  }
});

module.exports = router;
