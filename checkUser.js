var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/car2025")
var User = require("./models/user.js").User


var first_user = new User({
   username: "Vasya",
   password: "qwerty"
})


first_user.save();




