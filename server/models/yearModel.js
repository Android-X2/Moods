const mongoose = require("mongoose");

const yearSchema = new mongoose.Schema({
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  user_id: {
    type: String,
    required: true,
  },
  myArray: {
    type: [[Object]],
    default: () =>
      Array.from({ length: 52 }, () =>
        Array(7).fill({
          mood: "Blank",
        })
      ),
  },
});

module.exports = mongoose.model("Year", yearSchema);
