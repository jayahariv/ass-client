import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AssemblaAPI from './service/AssemblaAPI.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      secret: '',
    };

    this.onChangeKey = this.onChangeKey.bind(this);
    this.onChangeSecret = this.onChangeSecret.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeKey(event) {
    this.setState({
      key: event.target.value,
    });
  }

  onChangeSecret(event) {
    this.setState({
      secret: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('Key: ' + this.state.key + ' Secret: ' + this.state.secret);
    AssemblaAPI.getActivity(
      this.state.key,
      this.state.secret,
      function(err, resp) {
        console.log(resp);
      },
    );
    event.preventDefault();
  }

  render() {
    AssemblaAPI.getActivity(
      function (err, data) {
        if (err) {throw err}
        console.log('result: ', data);
      },
    );
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ass-Client</h2>
        </div>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Key :
            <input
              type="text"
              value={this.state.key}
              onChange={this.onChangeKey} />
          </label>
          <label>
            Secret :
            <input
              type="text"
              value={this.state.secret}
              onChange={this.onChangeSecret} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
