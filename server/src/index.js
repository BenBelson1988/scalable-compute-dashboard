const express = require("express");
const weatherRouter = require("./routers/weather");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(weatherRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
