// Импорт ошибок
const {
  ValidationError,
  DocumentNotFoundError,
  CastError,
} = require('mongoose').Error;
const ErrorForbidden = require('../errors/ErrorForbidden');
const ErrorNotFound = require('../errors/ErrorNotFound');
const ErrorIncorrectData = require('../errors/ErrorIncorrectData');

// Импорт модели
const Movie = require('../models/movie');

const {
  CREATE_CODE,
  MOVIE_INCORRECT_DATA_MESSAGE,
  MOVIE_FORBIDDEN_MESSAGE,
  MOVIE_DELETE_MESSAGE,
  MOVIE_DELETE_NOT_FOUND_MESSAGE,
  MOVIE_FIND_NOT_FOUND_MESSAGE,
  MOVIE_BAD_ID_MESSAGE,
} = require('../utils/constants');

module.exports.getCardsMoviesByOwner = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .orFail()
    .then((cards) => res.send(cards))
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(MOVIE_FIND_NOT_FOUND_MESSAGE));
      } else {
        next(err);
      }
    });
}

// Функция создания карточки
module.exports.createMovieCards = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
  .then((card) => res.status(CREATE_CODE).send(card))
  .catch((err) => {
    if (err instanceof ValidationError) {
      next(new IncorrectDataError(MOVIE_INCORRECT_DATA_MESSAGE));
    } else {
      next(err);
    }
  });
}

// Функция удаление карточки
module.exports.deleteMovies = (req, res, next) => {
  Movie.findById(req.params.cardId)
    .orFail()
    .then((card) => {
      Movie.deleteOne({ _id: card._id, owner: req.user._id })
        .then((result) => {
          if (result.deletedCount === 0) {
            throw new ErrorForbidden({ message: MOVIE_FORBIDDEN_MESSAGE });
          } else {
            res.send({ message: MOVIE_DELETE_MESSAGE });
          }
        })
        .catch(next);
    })
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(MOVIE_DELETE_NOT_FOUND_MESSAGE));
      } else if (err instanceof CastError) {
        next(new IncorrectDataError(MOVIE_BAD_ID_MESSAGE));
      } else {
        next(err);
      }
    });
}

