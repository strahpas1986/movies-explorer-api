const router = require('express').Router();

const { createUser } = require('../controllers/signup');

const { createUserValidator } = require('../middlewares/celebrateValidation');

router.post('/', createUserValidator, createUser);

module.exports = router;
