class MainApi {
  constructor(opt) {
    this._baseUrl = opt.baseUrl;
  }

  register({name, email, password}) {
    return this._request('signup', {
      method: 'POST',
      headers: {"Accept": "application/json", "Content-Type": "application/json"},
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
      headers: {"Accept": "application/json", "Content-Type": "application/json"},
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
      headers: {"Accept": "application/json", "Content-Type": "application/json"},
      credentials: 'include',
    });
  }

  getUser() {
    return this._request('users/me', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
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
  baseUrl: 'http://localhost:3005',
});

export default mainApi;
