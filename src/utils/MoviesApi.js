class MoviesApi {
  constructor(opt) {
    this._baseUrl = opt.baseUrl;
  }

  getMovies() {
    return fetch(`${ this._baseUrl }`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then(this._getResponseData)
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${ res.status }`);
    }
    return res.json();
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
});

export default moviesApi;
