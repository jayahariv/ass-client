import React from 'react';

const request = require('xhr-request');


class AssemblaAPI {
  _baseUrl: string;
  constructor() {
    this._baseUrl = 'https://api.assembla.com';
  }

  getActivity(key: string, secret: string, callback: Function): string {
    request(
      this._baseUrl + '/v1/activity/',
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
