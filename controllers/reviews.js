const Review = require("../models/review");
const Recipe = require("../models/recipe");
const review = require("../models/review");

module.exports = {
  addReview,
  deleteReview,
  getReview,
  updateReview,
  getAllReviews,
};

async function addReview(req, res) {
  try {
    const content = req.body.content;

    const review = new Review({
      content: content,
    });
    await review.save();
    res.redirect("/reviews");
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
    res.render("reviews/show", { review: review });
  } catch (err) {
    console.log(err);
  }
}

async function getAllReviews(req, res) {
  try {
    const reviews = await Review.find();
    res.render("reviews/index", { reviews: reviews });
  } catch (err) {
    console.log(err);
  }
}

async function updateReview(req, res) {
  try {
    const id = req.params.id;
    const content = req.body.content;
    await review.save();
    res.redirect("/reviews");
  } catch (err) {
    console.log(err);
  }
}
