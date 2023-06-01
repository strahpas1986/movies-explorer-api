const router = require('express').Router();

// IMPORT CONTROLLERS
const { login } = require('../controllers/signin');

// IMPORT VALIDATORS
const { loginUserValidator } = require('../middlewares/celebrateValidation');

// LOGIN ROUTE
router.post('/', loginUserValidator, login);

// MODULE EXPORT
module.exports = router;
