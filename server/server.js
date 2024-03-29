const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
let cors = require("cors");
const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/links", require("./routes/linkRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/", require("./routes/index"));

app.listen(port, () =>
  console.log(`Server started on port ${port}`.blue.underline)
);
