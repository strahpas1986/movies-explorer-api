const { DEFAULT_CODE } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || DEFAULT_CODE;
  const errorMessage = statusCode === DEFAULT_CODE ? `Произошла неизвестная ошибка ${err.name}: ${err.message}` : err.message;
  res.status(statusCode).send({
    message: errorMessage,
  });
  return next();
};
