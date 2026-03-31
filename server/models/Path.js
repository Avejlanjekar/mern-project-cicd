const mongoose = require("mongoose");

const pathSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdBy: String,
  resources: [
    {
      title: String,
      link: String,
      duration: Number
    }
  ]
});

module.exports = mongoose.model("Path", pathSchema);