// импорт пакета jwt
const jwt = require('jsonwebtoken');

// импорт модели
const User = require('../models/user');

// импорт переменных
const { NODE_ENV, SECRET_KEY } = process.env;
const { MODE_PRODUCTION, DEV_KEY } = require('../utils/config');

// импорт сообщений
const { SIGNIN_MESSAGE } = require('../utils/constants');

// логин
module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === MODE_PRODUCTION ? SECRET_KEY : DEV_KEY,
        { expiresIn: '7d' },
      );
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      });
      res.send({ message: SIGNIN_MESSAGE });
    })
    .catch(next);
};
