const myRecipe = require("../model/recipe.js");
const seeds = require("./seeds.json");
myRecipe.insertMany(seeds).then(() => {
    console.log("Who wants a recipe");
}).then(() => {
    process.exit()});