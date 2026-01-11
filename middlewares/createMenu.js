
// middlewares/createMenu.js

module.exports = async function(req, res, next) {
  // Устанавливаем глобальные переменные
  res.locals.siteTitle = "Автомобили 2025";
  res.locals.currentYear = new Date().getFullYear();
  res.locals.sessionViews = req.session.counter || 0;
  
  try {
    // Проверяем наличие модели Car
    const Car = require("../models/car");
    
    // Получаем список автомобилей
    // Используем пустой объект {} вместо null
    const cars = await Car.find({}).limit(5);
    
    if (cars.length > 0) {
      // Если есть автомобили, создаем меню из них
      res.locals.nav = cars.map(car => ({
        name: car.model || car.title || "Автомобиль",
        url: `/cars/${car._id || car.slug}`,
        icon: "🚗"
      }));
      
      // Добавляем общий пункт
      res.locals.nav.unshift({
        name: "Все автомобили",
        url: "/cars",
        icon: "📋"
      });
    } else {
      // Если нет автомобилей
      res.locals.nav = [
        { name: "Главная", url: "/", icon: "🏠" },
      ];
    }
    
  } catch (err) {
    console.log("Меню: используем статичный вариант", err.message);
    // Статичное меню при ошибке
    res.locals.nav = [
      { name: "Главная", url: "/", icon: "🏠" },
      { name: "Porsche Cayenne", url: "/cars/porsche", icon: "🏎️" },
      { name: "Golf GTI 2025", url: "/cars/golf", icon: "🚗" },
      { name: "BMW M5", url: "/cars/bmw", icon: "🔷" }
    ];
  }
  
  // Добавляем активный класс для текущей страницы
  res.locals.nav = res.locals.nav.map(item => ({
    ...item,
    active: req.path === item.url
  }));
  
  next();
};