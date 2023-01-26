var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Recipe Repository" });
});

module.exports = router;
