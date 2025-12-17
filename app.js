var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var session = require("express-session")

//var MongoStore = require('connect-mongo');
const { default: MongoStore } = require('connect-mongo');


mongoose.connect('mongodb://localhost/car2025')
  .then(() => console.log('✅ MongoDB подключена'))
  .catch(err => console.error('❌ Ошибка подключения:', err));



var indexRouter = require('./routes/index');
var indexUsers = require('./routes/users');
var indexCars = require('./routes/cars');




var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.locals.title = 'Автомобили 2025'; // Значение по умолчанию
  next();
});


app.use(session({
 secret: "FavouriteCar",
 cookie:{
    maxAge: 24 * 60 * 60 * 1000, // 24 часа (рекомендую увеличить)
    httpOnly: true,
    secure: false, // false для localhost
    sameSite: 'lax'
 },
 // proxy: true,
 resave: false,
 saveUninitialized: false,
 store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/car2025', // Просто используйте mongoUrl
    collectionName: 'sessions'
  })
}));



app.use('/', indexRouter);
app.use('/users', indexUsers);
app.use('/users', indexRouter);
app.use('/cars', indexCars);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
