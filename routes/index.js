var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* страница порш */
router.get('/porsche', function(req, res, next) {
  res.send("<h1>Страница Porsche</h1>") });

/* страница гольф */
router.get('/golf', function(req, res, next) {
  res.send("<h1>Страница Golf GTI</h1>") });

/* страница bmw */
router.get('/bmw', function(req, res, next) {
  res.send("<h1>Страница BMW M5 F90 Competition</h1>") });



module.exports = router;
