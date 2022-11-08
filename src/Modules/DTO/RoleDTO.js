const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema(
  {
    _id: String,
    name: String,
  },
  { collection: "role" }
);
