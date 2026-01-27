const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

router.get("/trips", (req, res) => {
  res.json({ allTrips: trips });
});

module.exports = router;
