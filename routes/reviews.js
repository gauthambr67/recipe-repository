const express = require("express");
let router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

//GET /reviews/new
router.get("/recipes/:id", reviewsCtrl.getReviews);

//POST /reviews
router.post("/recipes/:id", reviewsCtrl.addReview);

//PUT /recipes/:id/reviews (linked to recipes)
router.put("/recipes/:recipeid/:reviewid", reviewsCtrl.updateReview);

//DELETE /recipes/:id/reviews
router.delete("/recipes/:recipeid/:reviewid", reviewsCtrl.deleteReview);

module.exports = router;
