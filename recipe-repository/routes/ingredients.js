const express = require("express");
const router = express.Router();
const ingredientsCtrl = require("../controllers/ingredients");

//GET /ingredients/new
router.get("/ingredients/new", ingredientsCtrl.new);

//POST /ingredients
router.get("/ingredients", ingredientsCtrl.create);

//POST /recipes/:id/ingredients (linked to recipes)
router.post("/recipes/:id/ingredients", ingredientsCtrl.addToIngredientList);

module.exports = router;
