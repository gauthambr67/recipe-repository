const express = require("express");
let router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

//GET /reviews/new
router.get("/recipes/:id/reviews", reviewsCtrl.getAllReviews);

//GET /reviews
router.get("/recipes/:id/reviews/new", reviewsCtrl.renderReview);

//POST /reviews
router.post("/recipes/:recipeId/reviews/new", reviewsCtrl.addReview);

//PUT /recipes/:id/reviews (linked to recipes)
router.put("/recipes/:recipeid/reviews/:reviewid", reviewsCtrl.updateReview);

//DELETE /recipes/:id/reviews
router.delete("/recipes/:recipeid/reviews/:reviewid", reviewsCtrl.deleteReview);

module.exports = router;
