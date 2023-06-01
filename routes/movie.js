const router = require('express').Router();

const {
  getCardsMoviesByOwner,
  createMovieCards,
  deleteMovies
} = require('../controllers/movie');

const {
  createMovieCardValidator,
  deleteMovieCardValidator,
} = require('../middlewares/celebrateValidation');

router.get('/', getCardsMoviesByOwner);

router.post('/', createMovieCardValidator, createMovieCards);

router.delete('/:cardId', deleteMovieCardValidator, deleteMovies);

module.exports = router;
