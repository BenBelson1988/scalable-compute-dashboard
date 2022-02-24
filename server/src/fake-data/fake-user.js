const sha256 = require("js-sha256");

const fakeUser = {
  user: "BenBen",
  password: "04051ed46085d6f6a9c26c4c06f220310ca3f55ab3203d74c567210f39e639be", // hash => MyPass1234!
  token: "someAuthToken",
};

const getFakeUser = ({ user, password }) => {
  if (user !== fakeUser.user) throw new Error("User name doesn't exist");
  if (sha256(password) !== fakeUser.password) throw new Error("Wrong password");
  const token = fakeUser.token;
  return { user, token };
};

module.exports = {
  getFakeUser,
};
