const Car = require('../models/Cars');

const index_get = async (req,res) => {
    const allCars = await Car.find();
    console.log(allCars);
    res.render("Cars/index.ejs", { allCars });
}

const add_get = (req, res) => {
    res.render("Cars/add.ejs");
};

const create_post = async (req, res) => {
    console.log(req.body);
    await Car.create(req.body);
    res.redirect("/cars");
}

const show_get = async (req,res)=>{
    console.log(req.params.carId);
    const oneCar = await Car.findById(req.params.carId);
    console.log(oneCar);
    res.render(`Cars/detail.ejs`,{oneCar});
}

const delete_delete = async (req,res)=>{
    console.log(req.params.carId);
    const delCar = await Car.findByIdAndDelete(req.params.carId);
    console.log(delCar);
    res.redirect("/cars");

}

const edit_get = async (req,res)=>{
    console.log(req.params.carId);

    const editCar = await Car.findById(req.params.carId)
    res.render("Cars/edit.ejs", {editCar})
}

const update_put = async (req, res) => {
    console.log(req.body);
    console.log(req.params.carId);
    const updatedCar = await Car.findByIdAndUpdate(req.params.carId,req.body);
    console.log(updatedCar);
    res.redirect("/cars");

}
module.exports = {
    index_get, 
    add_get,
    create_post,
    show_get,
    delete_delete,
    edit_get,
    update_put
};