const express = require("express");
const router = express.Router();

const Trip = require("../models/Trip");

router.post("/", (req, res) => {
  const newTrip = new Trip({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
  });
  newTrip.save().then((data) => {
    Trip.find().then((data) => {
      res.json({ allTrips: data });
    });
  });
});

router.get("/", (req, res) => {
  Trip.find().then((data) => {
    res.json({ allTrips: data });
  });
});

module.exports = router;
