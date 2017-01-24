import AssemblaAPI from '.././service/AssemblaAPI.js';
import React from 'react';

class LoginContainer extends React.Component {

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Key : </label>
        <input
          type="text"
          value={this.state.key}
          onChange={this.onChangeKey} />
        <label> Secret: </label>
        <input
          type="text"
          value={this.state.secret}
          onChange={this.onChangeSecret} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = LoginContainer;
