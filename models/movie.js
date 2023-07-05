const mongoose = require('mongoose');
const { LINK_REGEXP } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  country: {
    type: String,
    minlength: [2, 'Минимальная длина поля "country" 2 символа'],
    maxlength: [30, 'Максимальная длина поля "country" 30 символов'],
    default: 'США',
  },
  director: {
    type: String,
    minlength: [2, 'Минимальная длина поля "director" 2 символа'],
    maxlength: [30, 'Максимальная длина поля "director" 30 символов'],
    required: [true, 'Поле "director" должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле "duration" должно быть заполнено'],
  },
  year: {
    type: String,
    minlength: [2, 'Минимальная длина поля "year" 2 символа'],
    maxlength: [30, 'Максимальная длина поля "year" 30 символов'],
    required: [true, 'Поле "year" должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле "description" должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле "image" должно быть заполнено'],
    validate: {
      validator: (v) => LINK_REGEXP.test(v),
      message: 'Неправильный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле "trailerLink" должно быть заполнено'],
    validate: {
      validator: (v) => LINK_REGEXP.test(v),
      message: 'Неправильный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле "thumbnail" должно быть заполнено'],
    validate: {
      validator: (v) => LINK_REGEXP.test(v),
      message: 'Неправильный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'Поле "owner" должно быть заполнено'],
  },
  movieId: {
    type: Number,
    required: [true, 'Поле "movieId" должно быть заполнено'],
  },
  nameRU: {
    type: String,
    minlength: [2, 'Минимальная длина поля "nameRU" 2 символа'],
    maxlength: [30, 'Максимальная длина поля "nameRU" 30 символов'],
    required: [true, 'Поле "nameRU" должно быть заполнено'],
  },
  nameEN: {
    type: String,
    minlength: [2, 'Минимальная длина поля "nameEN" 2 символа'],
    maxlength: [30, 'Максимальная длина поля "nameEN" 30 символов'],
    required: [true, 'Поле "nameEN" должно быть заполнено'],
  },
}, {versionKey: false});

module.exports = mongoose.model('movie', userSchema);
