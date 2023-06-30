const BASE_URL = 'https://api.nomoreparties.co';
const EMAIL_REG = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
const SERVER_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

module.exports = {
  BASE_URL,
  EMAIL_REG,
  SERVER_ERROR,
}