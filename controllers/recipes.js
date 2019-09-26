const express = require("express");

const router = express.Router();
const MyRecipe = require("../model/recipe.js");

router.get('/', (req, res) => {
    MyRecipe.find({}).then(recipes => {
        res.render("index", { recipes })
    })
});
module.exports = router;

