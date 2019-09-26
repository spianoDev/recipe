const express = require("express");
const app = express();
const recipesController = require("./controllers/recipes.js");
app.use("/", recipesController);

app.set("view engine", "hbs");
app.listen(5000, () => {console.log("app running on 5000")});
