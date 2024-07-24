const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose"); // require package
const app = express();


const dotenv = require("dotenv");
dotenv.config();
const methodOverride = require('method-override');

const carsCtrl = require('./controllers/cars');
// const Car = ('./models/cars.js');


// MIDDLEWARE
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})

// app.get('/', fruitsCtrl.home_get);
app.get('/cars', carsCtrl.index_get);
// app.get('/cars/new', carsCtrl.new_get);
// app.post('/cars', carsCtrl.create_post);
// app.get('/cars/:carId', carsCtrl.show_get);
// app.delete('/cars/:carId', carsCtrl.delete_delete);
// app.get('/cars/:carId/edit', carsCtrl.edit_get);
// app.put('/cars/:carId', carsCtrl.update_put);



//check the run
// app.get("/", async (req, res) => {
//     res.send("hello, friend!");
// });

//Home page
app.get("/", async (req, res) => {
    res.render("index.ejs");
});



// app.get('/', fruitsCtrl.home_get);
app.get('/cars', carsCtrl.index_get);
app.get('/cars/add', carsCtrl.add_get);
app.post('/cars/add', carsCtrl.create_post);
app.get('/cars/:carId', carsCtrl.show_get);
app.delete('/cars/delete/:carId', carsCtrl.delete_delete);
app.get('/cars/edit/:carId', carsCtrl.edit_get);
app.put('/cars/:carId', carsCtrl.update_put);


app.listen(3000, () => {
    console.log("Listening on port 3000");
});