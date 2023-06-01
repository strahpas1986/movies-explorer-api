// Импорт переменных
const { BAD_REQUEST_CODE } = require('../utils/constants');

// Ошибка авторизации
class ErrorIncorrectData extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQUEST_CODE;
  }
}

module.exports = ErrorIncorrectData;
