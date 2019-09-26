const express = require("express");

const router = express.Router();
const Recipe = require("../model/recipe.js");

router.get("/", (req, res) => {
    Recipe.find({}).then(recipes => {

        res.render("index", { recipes })
    })
});
module.exports = router;

