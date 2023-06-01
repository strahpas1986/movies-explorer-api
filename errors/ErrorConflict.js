// IMPORT VARIABLES
const { CONFLICT_CODE } = require('../utils/constants');

// AUTHORIZATION ERROR
class ErrorConflict extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_CODE;
  }
}

module.exports = ErrorConflict;
