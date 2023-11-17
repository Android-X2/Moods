const Year = require("../models/yearModel");

const getYears = async (req, res) => {
  // const user_id = req.user._id;
  const years = await Year.find({ user_id: req.user._id});
  res.status(200).json(years);
};

const getYear = async (req, res) => {
  const { id } = req.params;
  // const user_id = req.user._id;
  const year = await Year.findOne({ user_id: req.user._id, year: id });
  if (!year) {
    return res.status(404).json({ error: "No such year exists!" });
  }

  res.status(200).json(year);
};

const createYear = async (req, res) => {
  //find a way so that it checks if the current year is already created.
  // const currentYear = new Date().getFullYear();
  // const user_id = req.user._id;

  const exists = await Year.findOne({
    user_id: req.user._id,
    year: new Date().getFullYear(),
  });
  if (exists) {
    return res.status(400).json({ message: "Year already exists" });
  }
  try {
    const year = await Year.create({ user_id: req.user._id });
    res.status(200).json(year);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteYear = async (req, res) => {
  const { id } = req.params;
  // const user_id = req.user._id;

  const year = await Year.findOneAndDelete({
    user_id: req.user._id,
    year: id,
  });
  if (!year) {
    return res.status(404).json({ error: "No such year exists" });
  }
  res.status(200).json(year);
};

module.exports = {
  getYears,
  getYear,
  createYear,
  deleteYear,
};
