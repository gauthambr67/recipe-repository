const Review = require("../models/review");
const Recipe = require("../models/recipe");

module.exports = {
  addReview,
  deleteReview,
  getReviews,
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

function getReviews(req, res) {
  // Recipe.findById({}, function (err, reviews) {
  //   res.render(`/recipes/${recipe._id}`, {
  //     reviews,
  //   });
  // });
  Recipe.find({ _id: req.params.id }, function (err, reviews) {
    res.render("/reviews", { title: "All Reviews", reviews });
  });
}

function updateReview(req, res) {
  Recipe.findOneAndUpdate(
    { _id: req.params.reviewid },
    req.body,
    { new: true },
    function (err, recipe) {
      console.log("Error updating review.");
    }
  );
}

// /receipe/<id_recipie>/<id_review>
