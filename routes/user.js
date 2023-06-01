const router = require('express').Router();

const { getUserInfo, updateUserInfo } = require('../controllers/user');
const { updateUserValidator } = require('../middlewares/celebrateValidation');

router.get('/me', getUserInfo);

router.patch('/me', updateUserValidator, updateUserInfo);

module.exports = router;
