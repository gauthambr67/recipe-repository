const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
    enum: ["Appetizer", "Main Course", "Dessert"],
  },
  serves: {
    type: Number,
    default: 1,
    min: 1,
  },
  cookTime: {
    type: Number,
    min: 1,
  },
  prepInst: {
    type: String,
    required: true,
  },
  cookInst: {
    type: String,
    required: true,
  },
});
