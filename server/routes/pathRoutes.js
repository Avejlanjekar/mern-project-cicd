const router = require("express").Router();
const { createPath, getPaths } = require("../controllers/pathController");

router.post("/", createPath);
router.get("/", getPaths);

module.exports = router;