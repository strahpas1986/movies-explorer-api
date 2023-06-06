// Импорт переменных
const { FORBIDDEN_CODE } = require('../utils/constants');

// Ошибка Доступ запрещен
class ErrorForbidden extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_CODE;
  }
}

module.exports = ErrorForbidden;
