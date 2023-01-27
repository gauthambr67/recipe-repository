const Recipe = require("../models/recipe");
const Review = require("../models/review");
// const ingredient = require("../models/ingredient");
const recipe = require("../models/recipe");

module.exports = {
  indexRecipe,
  showRecipe,
  newRecipe,
  createRecipe,
  deleteRecipe,
};

function indexRecipe(req, res) {
  Recipe.find({}, function (err, recipes) {
    res.render("recipes/index", { title: "All Recipes", recipes });
  });
}

function showRecipe(req, res) {
  Recipe.findById(req.params.id);

  res.render("recipes/show", {
    title: "Recipe",
    recipe,
  });
}

function newRecipe(req, res) {
  res.render("recipes/new", { title: "Add new recipe" });
}

async function createRecipe(req, res) {
  try {
    const title = req.body.title;
    const course = req.body.course;
    const serves = req.body.serves;
    const cookTime = req.body.cookTime;
    const ingredients = req.body.ingredients;
    const cookInst = req.body.cookInst;
    const recipe = new Recipe({
      title: title,
      course: course,
      serves: serves,
      cookTime: cookTime,
      ingredients: ingredients,
      cookInst: cookInst,
    });
    await recipe.save();
    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
  }
}
