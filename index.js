const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const recipesController = require("./controllers/recipes.js");
app.use("/", recipesController);
app.use("/assets", express.static('public'));

app.get("/" , (req, res) => {
    res.render("index", { title:req.params.title })
});

app.listen(5000, () => {console.log("app running on 5000")});
