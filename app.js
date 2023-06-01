// ============imports=============
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const { strict } = require("assert");
require("dotenv").config();
const auth = require("./src/controllers/authController");
const app = express();
// ============ imporing routes ================

const authRoute = require("./src/routes/authRoute");
const offre = require("./src/routes/offreRoute");
const suggestion = require("./src/routes/suggestionRoute");
const demonde = require("./src/routes/demondeRoute");
const dashbooard = require("./src/routes/dashboardRoute");

//========== configuration ============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //
//app.use(userData);

// configuring cors
//app.use(cors);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control"
  );
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.status(200).send();
  } else {
    next();
  }
});
//=========== connecting to database ==============
let gfs;
mongoose.set("strictQuery", true);
mongoose   
  .connect(
    "mongodb://localhost:27017/stage",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log("error has been occured: ", err));

// connecting the file upload to mongoose




// ========= configurring routes ==========

app.use("/auth",authRoute);
app.use("/offre",offre);
app.use("/suggestion",suggestion);
app.use("/demonde",demonde);
app.use("/dashbooard",dashbooard);

module.exports = app;
