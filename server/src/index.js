const express = require("express");
const fakeEC2Router = require("./routers/fakeEC2s");
const userRouter = require("./routers/user");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(fakeEC2Router);
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
