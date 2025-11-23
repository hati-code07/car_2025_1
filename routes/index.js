var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* страница порш */
router.get('/porsche', function(req, res, next) {
  res.render('car', 
    { title: 'Porsche Cayenne', 
    picture: "/images/porsche.jpg", 
    desc: "Откройте для себя Porsche Cayenne 2025 — где каждая деталь продумана для идеального вождения. Динамичный дизайн, интуитивный интерфейс и непревзойденная производительность превращают обычные маршруты в захватывающие путешествия."  });
});


/* страница гольф */
router.get('/golf', function(req, res, next) {
  res.render('car', 
    { title: 'Golf GTI', 
    picture: "/images/golf.jpg", 
    desc: "Откройте для себя Volkswagen Golf GTI 2025 — идеальный симбиоз мощности и практичности. Агрессивный дизайн, моментальный отклик и фирменная клетка GTI создают неповторимый характер этого спортивного хетчбэка."  });
});


/* страница bmw */
router.get('/bmw', function(req, res, next) {
    res.render('car', 
    { title: 'BMW M5 F90 Competition', 
    picture: "/images/m5f90.jpeg", 
    desc: "Легендарный BMW M5 Competition сочетает в себе элегантность бизнес-седана с характером гоночного автомобиля. Усиленные двигатель V8 Biturbo, спортивная подвеска Competition и агрессивный дизайн подчеркивают его исключительный статус."  });
});



module.exports = router;
