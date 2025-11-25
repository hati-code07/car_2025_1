const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/car2025');
var Car = require('./models/car.js').Car

var car = new Car({
   title: "PORSCHE",
   nick: "porsche"
})
car.save();
// var schema = mongoose.Schema({ name: String })

// schema.methods.rauf = function(){
//    console.log(this.name + " for you")
// }

// const Car = mongoose.model('Car',schema);

// const cr = new Car ({ name: 'Top cars' });
// cr.save().then(() => cr.rauf());







