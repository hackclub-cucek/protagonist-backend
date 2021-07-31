var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("The Protagonist");
});

router.post("/signup", function (req, res) {});

module.exports = router;
