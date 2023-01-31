var mongoose = require("mongoose");

const Review = require("../models/review");
const Recipe = require("../models/recipe");
const review = require("../models/review");

module.exports = {
  addReview,
  deleteReview,
  getReview,
  updateReview,
  getAllReviews,
  renderReview,
};

async function addReview(req, res) {
  try {
    const content = req.body.content;
    const recipeId = mongoose.Types.ObjectId(req.params.recipeId);

    const review = new Review({
      content: content,
      recipe: recipeId,
    });
    await review.save();
    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
  }
}

async function deleteReview(req, res) {
  try {
    const id = req.params.id;
    await Review.findByIdAndRemove(id);
    res.redirect("/reviews");
  } catch (err) {
    console.log(err);
  }
}

async function getReview(req, res) {
  try {
    const id = req.params.id;
    const review = await Review.findById(id);
    res.render("reviews/reviewList", { title: "Add Review", review: review });
  } catch (err) {
    console.log(err);
  }
}

async function getAllReviews(req, res) {
  console.log("REACHING GETT ALL REVIEWS");
  try {
    const reviews = await Review.find();
    res.render("reviews/reviewList", {
      title: "All Reviews",
      reviews: reviews,
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateReview(req, res) {
  try {
    const id = req.params.id;
    const content = req.body.content;
    await review.save();
    res.redirect("reviews/reviewList");
  } catch (err) {
    console.log(err);
  }
}

async function renderReview(req, res) {
  res.render("reviews/new", { recipeId: req.params.id });
}
