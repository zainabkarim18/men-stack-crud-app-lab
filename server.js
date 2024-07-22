const express = require("express");
const morgan = require('morgan');

const app = express();


// MIDDLEWARE
app.use(morgan('dev'));

//check the run
// app.get("/", async (req, res) => {
//     res.send("hello, friend!");
// });

//Home page
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});