const mongoose = require("mongoose");
const Year = require("../models/yearModel");

const updateMood = async (req, res) => {
  // const { selectedYear, week, day } = req.body;
  // const { mood } = req.body;
  // const user_id = req.user._id;

  if (!req.body.mood) {
    return res.status(404).json({ message: "All fields must be present." });
  }

  const year = await Year.findOne({ user_id: req.user._id, year: req.body.selectedYear });
  if (!year) {
    return res.status(404).json({ error: "No such year exists!" });
  }
  const updateMood = await Year.findOneAndUpdate(
    {user_id: req.user._id ,year: req.body.selectedYear },
    {
      $set: {
        [`myArray.${req.body.week}.${req.body.day}`]: {
          mood: req.body.mood,
        },
      },
    }
  );
  const newYear = await Year.findOne({ user_id: req.user._id ,year: req.body.selectedYear });
  res.status(200).json(newYear);
};

module.exports = {
  updateMood,
};
