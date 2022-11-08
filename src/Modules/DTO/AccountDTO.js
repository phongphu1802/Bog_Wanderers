const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema(
  {
    _id: String,
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    birthday: Date,
    sex: Number,
    role: String,
    phone: String,
    create_date: Date,
    update_date: Date,
  },
  { collection: "account" }
);
