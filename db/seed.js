const Recipe = require("../model/recipe");
const seeds = require("./seeds.json");
Recipe.insertMany(seeds).then(() => {
    console.log("Who wants a recipe");
}).then(() => {
    process.exit()});