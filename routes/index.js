const rootRouter = require('express').Router();

const users = require('./users');
const movies = require('./movies');
const signin = require('./signin');
const signup = require('./signup');
const notFound = require('./notFound');
const signout = require('./signout');
const auth = require('../middlewares/auth');

rootRouter.use('/signin', signin);
rootRouter.use('/signup', signup);
rootRouter.use('/signout', signout);
rootRouter.use('/users', auth, users);
rootRouter.use('/movies', auth, movies);
rootRouter.use('*', notFound);

module.exports = rootRouter;
