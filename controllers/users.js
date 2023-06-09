const {
  ValidationError,
  DocumentNotFoundError,
  CastError,
} = require('mongoose').Error;

const {
  USER_NOT_FOUND_MESSAGE,
  USER_BAD_ID_MESSAGE,
  USER_BAD_DATA_MESSAGE,
} = require('../utils/constants');

const User = require('../models/user');

module.exports.getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err instanceof DocumentNotFound) {
        next(new NotFoundError(USER_NOT_FOUND_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.updateUserInfo = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(req.user._id, { email, name }, { new: true, runValidators: true })
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(USER_NOT_FOUND_MESSAGE));
      } else if (err instanceof CastError) {
        next(new IncorrectDataError(USER_BAD_ID_MESSAGE));
      } else if (err instanceof ValidationError) {
        next(new IncorrectDataError(USER_BAD_DATA_MESSAGE));
      } else {
        next(err);
      }
    });
}
