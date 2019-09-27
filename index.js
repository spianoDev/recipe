const express = require("express");
const app = express();
app.set("view engine", "hbs");

const recipesController = require("./controllers/recipes.js");
app.use("/", recipesController);
app.use("/assets", express.static('public'));

app.get("/" , (req, res) => {
    res.render("index", { title:req.params.title })
});

app.listen(5000, () => {console.log("app running on 5000")});
