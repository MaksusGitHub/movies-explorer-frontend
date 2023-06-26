class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, {
      headers: this._headers
    })
    .then((res) => this._checkStatus(res))
  }
}

export const MoviesApi = new Api({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-type': 'application/json',
  }
})