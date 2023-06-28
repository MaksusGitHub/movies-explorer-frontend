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

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => this._checkStatus(res))
      .then((res) => {
        return res;
      }) 
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
      .then((res) => this._checkStatus(res))
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          return res;
        } else {
          return;
        }
      })
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => this._checkStatus(res))
  }
}

export const MainApi = new Api({
  url: 'http://localhost:3001',
  // url: 'https://api.maksus.movie-explorer.nomoredomains.rocks/',
  headers: {
    'Content-type': 'application/json',
  }
})