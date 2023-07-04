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

  logOut() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
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

  getContent = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then((res) => this._checkStatus(res))
      .then(res => res);
  }

  updateProfile(user) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(user),
    })
      .then((res) => this._checkStatus(res))
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => this._checkStatus(res))
  }

  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movie),
    })
      .then((res) => this._checkStatus(res))
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => this._checkStatus(res))
  }
}

export const MainApi = new Api({
  // url: 'https://api.maksus.movie-explorer.nomoredomains.rocks',
  url: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  }
})