const request = require('xhr-request');

class AssemblaAPI {
  _baseUrl: string;
  constructor() {
    this._baseUrl = 'http://localhost:22988';
  }

  getActivity(key: string, secret: string, callback: Function): string {
    request(
      this._baseUrl + '/activity?key=' + key + '&secret=' + secret,
      callback,
    );
  }

  getMentions(key: string, secret: string, callback: Function): string {
    request(
      this._baseUrl + '/mentions?key=' + key + '&secret=' + secret,
      callback,
    );
  }

  getUsers(key: string, secret: string, callback: Function): string {
    request(
      this._baseUrl + '/spaces/xxx/users?key=' + key + '&secret=' + secret,
      callback,
    );
  }
}

module.exports = new AssemblaAPI();
