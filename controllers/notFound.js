const { URL_NOT_FOUND_MESSAGE } = require('../utils/constants');
// IMPORT VARIABLES
const ErrorNotFound = require('../errors/ErrorNotFound');

// NOT FOUNDED ROUTE
module.exports.notFound = (req, res, next) => {
  next(new ErrorNotFound(URL_NOT_FOUND_MESSAGE));
};
