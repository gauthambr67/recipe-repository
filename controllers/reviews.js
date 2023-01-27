const Review = require("../models/reviews");
const Recipe = require("../models/recipe");

module.exports = {
  addReview,
  deleteReview,
  allReviews,
  updateReview,
};

function addReview(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    recipe.reviewsList.push(req.body.reviewId);
    recipe.save(function (err) {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
}

function deleteReview(req, res) {
  Recipe.findOneAndDelete({ _id: req.params.id }, function (err) {
    res.redirect(`/recipes/${recipe._id}`);
  });
}

function allReviews(req, res) {
  Recipe.find({}, function (err, reviews) {
    res.render(`/recipes/${recipe._id}`, {
      reviews,
    });
  });
}

function updateReview(req, res) {
  Recipe.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, recipe) {
      console.log("Error updating review.");
    }
  );
}

// /receipe/<id_recipie>/<id_review>
