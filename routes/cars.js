var express = require('express');
var router = express.Router();
var createError = require('http-errors');
//var Car = require('../models/car').Car;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});


// router.get("/:nick", async function(req, res, next) {
//    var cars = await Car.find({nick: req.params.nick});
//    console.log(cars)
//    if(!cars.length) return next(new Error("Нет такой машины в каталоге"))
//        var car = cars[0];
//        res.render('car', {
//            title: car.title,
//            picture: car.avatar,
//            desc: car.desc
//        })
// });



module.exports = router;

