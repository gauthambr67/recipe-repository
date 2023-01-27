const Recipe = require("../models/recipe");
const Review = require("../models/review");
// const ingredient = require("../models/ingredient");
const recipe = require("../models/recipe");

module.exports = {
  index,
  show,
  new: newRecipe,
  create,
  delete: deleteRecipe,
};

function index(req, res) {
  Recipe.find({}, function (err, recipes) {
    res.render("recipes/index", { title: "All Recipes", recipes });
  });
}

function show(req, res) {
  Recipe.findById(req.params.id)
    .populate("ingredientList")
    .exec(function (err, recipe) {
      Ingredient.find(
        { _id: { $nin: recipe.ingredientList } },
        function (err, ingredients) {
          console.log(ingredients);
          res.render("recipes/show", {
            title: "Recipe",
            recipe,
            ingredients,
          });
        }
      );
    });
}
function newRecipe(req, res) {
  res.render("recipes/new", { title: "Add new recipe" });
}

function create(req, res) {
  const recipe = new Recipe(req.body);
  recipe.save(function (err) {
    if (err) return res.redirect("/recipes/new");
    console.log(recipe);
    res.redirect(`/recipes/${recipe._id}`);
  });
}

function deleteRecipe(req, res, next) {
  Recipe.findOneAndDelete(
    { _id: req.params.id, user: req.user._id },
    function (err) {
      res.redirect("/recipes");
    }
  );
}
