const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

router.get("/trips", (req, res) => {
  const trips = allTrips([
    (departure = req.body.departure),
    (arrival = req.body.arrival),
    (date = req.body.date),
  ]);

  const allTrips = trips;

  res.json({ allTrips: trips });
});

module.exports = router;
