// импорт пакета bcryptjs
const bcrypt = require('bcryptjs');

// импорт ошибок
const { ValidationError } = require('mongoose').Error;
const ErrorIncorrectData = require('../errors/ErrorIncorrectData');
const ErrorConflict = require('../errors/ErrorConflict');

// импорт модели
const User = require('../models/user');

// импорт сообщений
const {
  CREATE_CODE,
  SIGNUP_INCORRECT_DATA_MESSAGE,
  SIGNUP_INCORRECT_EMAIL_MESSAGE,
} = require('../utils/constants');

// создание пользователя
module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      const data = user.toObject();
      delete data.password;
      res.status(CREATE_CODE).send(data);
    })
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new ErrorIncorrectData(SIGNUP_INCORRECT_DATA_MESSAGE));
      } else if (err.code === 11000) {
        next(new ErrorConflict(SIGNUP_INCORRECT_EMAIL_MESSAGE));
      } else {
        next(err);
      }
    });
};
