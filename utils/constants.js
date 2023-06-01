const CREATE_CODE = 201;
const BAD_REQUEST_CODE = 400;
const UNAUTHORIZED_CODE = 401;
const FORBIDDEN_CODE = 403;
const NOT_FOUND_CODE = 404;
const CONFLICT_CODE = 409;
const DEFAULT_CODE = 500;

const LINK_REGEXP = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/im;

const SIGNIN_MESSAGE = 'Успешный вход';
const SIGNOUT_MESSAGE = 'Успешный выход';
const SIGNUP_INCORRECT_DATA_MESSAGE = 'Переданы некорректные данные для создания пользователя';
const SIGNUP_INCORRECT_EMAIL_MESSAGE = 'Указанный email уже зарегистрирован. Пожалуйста используйте другой email';
const MOVIE_DELETE_MESSAGE = 'Фильм удалён';
const MOVIE_INCORRECT_DATA_MESSAGE = 'Переданы некорректные данные для создания карточки фильма';
const MOVIE_FORBIDDEN_MESSAGE = 'Невозможно удалить карточку созданную не вами';
const MOVIE_DELETE_NOT_FOUND_MESSAGE = 'Карточка с указанным ID не найдена';
const MOVIE_FIND_NOT_FOUND_MESSAGE = 'Не найдены карточки пользователя';
const MOVIE_BAD_ID_MESSAGE = 'Передан некорректный ID карточки';
const URL_NOT_FOUND_MESSAGE = 'Указан несуществующий URL';
const USER_NOT_FOUND_MESSAGE = 'Пользователь с указанным ID не найден';
const USER_BAD_ID_MESSAGE = 'Передан некорректный ID пользователя';
const USER_BAD_DATA_MESSAGE = 'Переданы некорректные данные для редактирования профиля';
const AUTHORIZATION_MESSAGE = 'Необходима авторизация';
const AUTHORIZATION_ERROR_MESSAGE = 'Неправильная почта или пароль';

const ALLOWED_CORS = [
  // 'http://diplom.ld-webdev.nomoredomains.rocks',
  // 'https://diplom.ld-webdev.nomoredomains.rocks',
  // 'http://51.250.11.115',
  // 'https://51.250.11.115',
  'http://localhost:3000',
  'http://localhost:3001',
];

// ALLOWED METHODS
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  LINK_REGEXP,
  CREATE_CODE,
  BAD_REQUEST_CODE,
  UNAUTHORIZED_CODE,
  FORBIDDEN_CODE,
  NOT_FOUND_CODE,
  CONFLICT_CODE,
  DEFAULT_CODE,
  SIGNIN_MESSAGE,
  SIGNOUT_MESSAGE,
  SIGNUP_INCORRECT_DATA_MESSAGE,
  SIGNUP_INCORRECT_EMAIL_MESSAGE,
  MOVIE_DELETE_MESSAGE,
  MOVIE_INCORRECT_DATA_MESSAGE,
  MOVIE_FORBIDDEN_MESSAGE,
  MOVIE_DELETE_NOT_FOUND_MESSAGE,
  MOVIE_FIND_NOT_FOUND_MESSAGE,
  MOVIE_BAD_ID_MESSAGE,
  URL_NOT_FOUND_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  USER_BAD_ID_MESSAGE,
  USER_BAD_DATA_MESSAGE,
  AUTHORIZATION_MESSAGE,
  AUTHORIZATION_ERROR_MESSAGE,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
}
