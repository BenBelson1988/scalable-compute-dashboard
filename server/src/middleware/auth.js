const { fakeUser } = require("../fake-data/fake-user");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.auth;
    if (fakeUser.token !== token) throw new Error();
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ error: "please authenticate" });
  }
};

module.exports = auth;
