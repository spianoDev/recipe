const express = require("express");

const router = express.Router();
const Recipe = require("../model/recipe.js");



router.put("/:id", (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id}, req.body).then(recipes =>{
        res.redirect("/");
    })
});
router.post("/", (req, res) => {
    Recipe.create(req.body).then(recipes => {
        console.log(req.body);
        res.redirect("/");
    })
});

router.get("/", (req, res) => {
    Recipe.find({}).then(recipes => {
        res.render("index", { recipes })
    })
});
router.get('/edit/:id', (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then( recipes => {
        res.render("edit", recipes);
    })
});
router.get("/new", (req, res) => {
    res.render("new" )
});
router.get('/ingredients/:id', (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then( recipes => {
        res.render("ingredients", recipes);
    })
});
router.get("/:id", (req,res) => {
    Recipe.findOne({ _id: req.params.id }).then( recipes => {
        res.render("recipe", recipes);
    })
});


module.exports = router;

