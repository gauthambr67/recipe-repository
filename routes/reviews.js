const express = require("express");
let router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

//GET /reviews/new
router.get("/recipes/:id/reviews", reviewsCtrl.getReviews);

//POST /reviews
router.post("/recipes/:id/reviews", reviewsCtrl.addReview);

//PUT /recipes/:id/reviews (linked to recipes)
router.put("/recipes/:recipeid/reviews/:reviewid", reviewsCtrl.updateReview);

//DELETE /recipes/:id/reviews
router.delete("/recipes/:recipeid/reviews/:reviewid", reviewsCtrl.deleteReview);

module.exports = router;
