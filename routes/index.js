var express = require("express");
var router = express.Router();
//const mongoose = require("mongoose");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

fetch("http://localhost:3000/trips")
  .then((res) => res.json())
  .then((data) => console.log(data.trips));

module.exports = router;
