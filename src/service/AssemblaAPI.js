import AssStore from '.././store/AssStore.js';
const request = require('xhr-request');

class AssemblaAPI {
  _baseUrl: string;
  constructor() {
    this._baseUrl = 'http://localhost:22988';
  }

  getActivity(page: string, callback: Function): string {
    const key = AssStore.getInstance().getKey();
    const secret = AssStore.getInstance().getSecret();
    request(
      this._baseUrl + '/activity?key=' +
        key + '&secret=' + secret + '&page=' + page,
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
    const spaceId = AssStore.getInstance().getSpaceID();
    request(
      this._baseUrl + '/spaces/' + spaceId +
        '/users?key=' + key + '&secret=' + secret,
      callback,
    );
  }

  getFile(path: string, callback: Function): string {
    request(
      this._baseUrl + '/file?path=' + path,
      callback,
    );
  }
}

module.exports = new AssemblaAPI();
