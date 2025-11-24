const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/car2025');

const Car = mongoose.model('Car', { name: String });

const cr = new Car ({ name: 'Top_cars' });
cr.save().then(() => console.log('rauf'));