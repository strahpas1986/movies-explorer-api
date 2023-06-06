const rootRouter = require('express').Router();

const user = require('./user');
const movie = require('./movie');
const signin = require('./signin');
const signup = require('./signup');
const notFound = require('./notFound');
const signout = require('./signout');
const auth = require('../middlewares/auth');

rootRouter.use('/signin', signin);
rootRouter.use('/signup', signup);
rootRouter.use('/signout', signout);
rootRouter.use('/user', auth, user);
rootRouter.use('/movie', auth, movie);
rootRouter.use('*', notFound);

module.exports = rootRouter;
