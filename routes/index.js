var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   // res.render('index', { title: 'Express' });  
   // res.cookie('greeting', 'Hi!!!').render('index', { title: 'Express' });
   // req.session.greeting = "Hi!!!";
   // res.render('index', { title: 'Express' });
   res.render('index', { title: 'Express',  counter:req.session.counter });
 
});



module.exports = router;
