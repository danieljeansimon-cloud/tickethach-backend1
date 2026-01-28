require("dotenv").config();
require("./models/connection");

console.log(process.env.DB_URI);

const express = require("express");
const tripsRouter = require("./routes/trips");
const cors = require("cors");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);
app.use(cors());
module.exports = app;
