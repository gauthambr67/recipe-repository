let express = require("express");
let router = express.Router();
let recipesCtrl = require("../controllers/recipes");

//All routes starting with '/recipes'

//GET /recipes (show all recipes)
router.get("/", recipesCtrl.index);
//GET /recipes/new (show form for entering new recipe)
router.get("/new", ensureLoggedIn, recipesCtrl.new);
//GET /recipes/:id (show the details of the chosen recipe)
router.get("/:id", recipesCtrl.show);
//POST /recipes (create new recipe based on input entered)
router.post("/", ensureLoggedIn, recipesCtrl.create);

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
