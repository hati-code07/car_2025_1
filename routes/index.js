var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('Новый маршрутизатор, для маршрутов, начинающихся с cars');  
  //index', { title: 'Express' }
});


 
module.exports = router;
