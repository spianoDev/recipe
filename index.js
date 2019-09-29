const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");
const Handlebars = require('handlebars');

app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const recipesController = require("./controllers/recipes.js");
app.use("/", recipesController);
app.use("/assets", express.static('public'));
// https://stackoverflow.com/questions/25259586/handlebarsjs-how-to-split-a-string

// Handlebars.registerHelper('splitIngredients', function(ingredients) {
//     for (let i = 0; i < ingredients.length; i++) {
//         let ingredientsList = ingredients.split(', ');
//         return ingredientsList[i] + " <br/> ";
//     }
// });

app.get("/" , (req, res) => {
    res.render("index", { title:req.params.title })
});

app.listen(5000, () => {console.log("app running on 5000")});
