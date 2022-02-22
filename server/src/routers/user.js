const express = require("express");
const router = new express.Router();
const { getFakeUser } = require("../fake-data/fake-user");

router.post("/login/user", async (req, res) => {
  try {
    const user = await getFakeUser(req.body);
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
