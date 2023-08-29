class MainApi {
  constructor(opt) {
    this._baseUrl = opt.baseUrl;
    this._headers = opt.headers;
  }

  register({name, email, password}) {
    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    });
  }

  authorize({email, password}) {
    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
  }

  exit() {
    return this._request('signout', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    });
  }

  getUser() {
    return this._request('users/me', {
      headers: this._headers,
      credentials: 'include',
    });
  }

  setUser({name, email}) {
    return this._request('users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      })
    });
  }

  getMovies() {
    return this._request('movies', {
      headers: this._headers,
      credentials: 'include',
    });
  }


  addCard({card}) {
    return this._request('movies', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: card.trailerLink,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      })
    });
  }

  delCard(id) {
    return this._request(`movies/${ id }`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    });
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${ res.status }`);
    }
    return res.json();
  }

  _request(endpoint, options) {
    return fetch(`${ this._baseUrl }/${ endpoint }`, options).then(this._getResponseData)
  }

}

const mainApi = new MainApi({
  baseUrl: 'https://api.dilog.nomoredomains.xyz',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
});

export default mainApi;
