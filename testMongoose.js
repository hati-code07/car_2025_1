const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/carMongoose2025');
//var schema = mongoose.Schema({ name: String })
var Car = require('./models/car.js').Car

var car = new Car({
   title: "PORSCHE",
   nick: "porsche"
})
car.save();






// schema.methods.rauf = function(){
//    console.log(this.name + " for you")
// }

//const Car = mongoose.model('Car',schema);
//const Car = mongoose.model('Car', { name: String });
//const cr = new Car ({ name: 'Top cars' });
//cr.save().then(() => console.log('Мяу'));
//cr.save().then(() => cr.rauf());







