const request = require('xhr-request');

class AssemblaAPI {
  _baseUrl: string;
  _corsProxy: string;
  constructor() {
    this._corsProxy = 'http://localhost:1337';
    this._baseUrl = '/api.assembla.com';
  }

  getActivity(key: string, secret: string, callback: Function): string {
    request(
      this._corsProxy + this._baseUrl + '/v1/activity/',
      {
        headers: {
          'X-Api-Key': key,
          'X-Api-Secret': secret,
        },
      },
      callback,
    );
  }

  getMentions(key: string, secret: string, callback: Function): string {
    request(
      this._corsProxy + this._baseUrl + '/v1/user/mentions.json',
      {
        headers: {
          'X-Api-Key': key,
          'X-Api-Secret': secret,
        },
      },
      callback,
    );
  }
}

module.exports = new AssemblaAPI();
