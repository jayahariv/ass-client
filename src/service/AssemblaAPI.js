import React from 'react';

const request = require('xhr-request');


class AssemblaAPI {
  _baseUrl: string;
  constructor() {
    this._baseUrl = 'https://api.assembla.com';
  }

  getActivity(callback: Function): string {
    request(
      this._baseUrl + '/v1/activity/',
      {
        headers: {
          'X-Api-Key': 'xxx',
          'X-Api-Secret': 'xxx',
        },
      },
      callback,
    );
  }
}

module.exports = new AssemblaAPI();
