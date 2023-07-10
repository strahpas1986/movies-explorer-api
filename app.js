require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const validationErrors = require('celebrate').errors;

const rootRouter = require('./routes/index');

const limiter = require('./middlewares/limiter');
const errors = require('./middlewares/errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { ALLOWED_CORS, DEFAULT_ALLOWED_METHODS } = require('./utils/constants');
const cors = require('cors');
const PORT = 3002;
const DATABASE = process.env.DATABASE || 'mongodb://localhost:27017/bitfilmsdb';

const app = express();

mongoose.connect(DATABASE);

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(cors({
  origin: ALLOWED_CORS,
  method: DEFAULT_ALLOWED_METHODS,
  credentials: true,
}))

app.use(requestLogger);

app.use('/', rootRouter);

app.use(errorLogger);

app.use(validationErrors());
app.use(errors);

app.listen(PORT);
