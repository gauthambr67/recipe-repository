let express = require("express");
let router = express.Router();
let recipesCtrl = require("../controllers/recipes");

//All routes starting with '/recipes'

//GET /recipes (show all recipes)
router.get("/", recipesCtrl.indexRecipe);
//GET /recipes/new (show form for entering new recipe)
router.get("/new", ensureLoggedIn, recipesCtrl.newRecipe);
//GET /recipes/:id (show the details of the chosen recipe)
router.get("/:id", recipesCtrl.showRecipe);
//POST /recipes (create new recipe based on input entered)
router.post("/", ensureLoggedIn, recipesCtrl.createRecipe);
//DELETE /recipes/:id (delete selected recipe by owner)
router.post("/:id", ensureLoggedIn, recipesCtrl.deleteRecipe);

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
