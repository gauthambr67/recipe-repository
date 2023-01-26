const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");
const ingredient = require("../models/ingredient");
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

async function deleteRecipe(req, res, next) {
  try {
    const movie = await Recipe.findOne({
      "recipes._id": req.params.id,
      "recipes.user": req.user._id,
    });

    //function needs to delete the recipe
    if (!recipe) return res.redirect("/recipes");
  } catch (err) {
    return next(err);
  }
}
