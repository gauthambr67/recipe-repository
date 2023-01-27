const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema(
  {
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
    cookInst: {
      type: String,
      required: true,
    },
    ingredientList: {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
      measure: {
        type: String,
        enum: ["ml", "grams", "tablespoon"],
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
