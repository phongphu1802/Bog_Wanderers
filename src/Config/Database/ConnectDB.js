const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/wandererstrips", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
