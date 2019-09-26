const mongoose = require('../db/connection');

const RecipeSchema = new mongoose.Schema( {
    title: {type: String, required: true},
    description: String,
    instructions: {type: String, required: true},
    ingredients: {type: Array, required: true}
});

const Recipe = mongoose.model("myRecipe", RecipeSchema);

module.exports = Recipe;
