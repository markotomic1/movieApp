const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

//can acept body json files
app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
