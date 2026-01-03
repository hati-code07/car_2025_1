var User = require("../models/user").User;

module.exports = async function(req, res, next) {
    // Сбрасываем user
    res.locals.user = null;
    
    // Проверяем, есть ли user_id в сессии
    if (req.session && req.session.user_id) {
        try {
            // findById возвращает ОДИН документ, а не массив!
            const user = await User.findById(req.session.user_id);
            
            if (user) {
                // Если пользователь найден
                res.locals.user = {
                    _id: user._id,
                    username: user.username  // Убедитесь, что это поле есть в схеме
                    // Добавьте другие нужные поля
                };
            }
        } catch (error) {
            console.error('Ошибка в auth middleware:', error);
            // При ошибке просто продолжаем без пользователя
        }
    }
    
    next();
};