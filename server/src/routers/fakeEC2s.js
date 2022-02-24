const express = require("express");
const router = new express.Router();
const { makeFakeEC2 } = require("../fake-data/fake-ec2");
const auth = require("../middleware/auth");

router.get("/fakeec2/:amount", auth, async (req, res) => {
  try {
    const data = makeFakeEC2(req.params.amount);
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
