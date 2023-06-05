const { URL_NOT_FOUND_MESSAGE } = require('../utils/constants');

const ErrorNotFound = require('../errors/ErrorNotFound');


module.exports.notFound = (req, res, next) => {
  next(new ErrorNotFound(URL_NOT_FOUND_MESSAGE));
};
