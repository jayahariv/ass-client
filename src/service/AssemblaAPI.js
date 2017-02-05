import AssStore from '.././store/AssStore.js';

const request = require('xhr-request');

class AssemblaAPI {
  _baseUrl: string;
  constructor() {
    this._baseUrl = 'http://localhost:22988';
  }

  getActivity(callback: Function): string {
    const key = AssStore.getInstance().getKey();
    const secret = AssStore.getInstance().getSecret();
    request(
      this._baseUrl + '/activity?key=' + key + '&secret=' + secret,
      callback,
    );
  }

  getMentions(callback: Function): string {
    const key = AssStore.getInstance().getKey();
    const secret = AssStore.getInstance().getSecret();
    request(
      this._baseUrl + '/mentions?key=' + key + '&secret=' + secret,
      callback,
    );
  }

  getUsers(callback: Function): string {
    const key = AssStore.getInstance().getKey();
    const secret = AssStore.getInstance().getSecret();
    request(
      this._baseUrl + '/spaces/xxx/users?key=' + key + '&secret=' + secret,
      callback,
    );
  }
}

module.exports = new AssemblaAPI();
