const Path = require("../models/Path");

// Create Path
exports.createPath = async (req, res) => {
  const path = await Path.create(req.body);
  res.json(path);
};

// Get All Paths
exports.getPaths = async (req, res) => {
  const paths = await Path.find();
  res.json(paths);
};