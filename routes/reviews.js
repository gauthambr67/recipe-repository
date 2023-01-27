const express = require("express");
let router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

//GET /ingredients/new
router.get("/ingredients/new", reviewsCtrl.new);

//POST /ingredients
router.get("/ingredients", reviewsCtrl.create);

//POST /recipes/:id/reviews (linked to recipes)
router.post("/recipes/:id/reviews", reviewsCtrl.addToIngredientList);

module.exports = router;
