const router = require('express').Router();

// импорт контроллера логина
const { login } = require('../controllers/signin');

// импорт валидатора
const { loginUserValidator } = require('../middlewares/celebrateValidation');

// роут логина
router.post('/', loginUserValidator, login);

// экспорт модуля
module.exports = router;
