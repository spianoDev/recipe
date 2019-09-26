const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.listen(5000, () => {console.log("app running on 5000")});
