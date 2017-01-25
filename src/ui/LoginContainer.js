import AssemblaAPI from '.././service/AssemblaAPI.js';
import React from 'react';
import './LoginContainer.css';

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
      <div className="LoginContainer">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className='InputStyle'
              type='text'
              placeholder='key'
              value={this.state.key}
              onChange={this.onChangeKey}
            />
          </div>
          <div>
            <input
              className='InputStyle'
              type='text'
              placeholder='secret'
              value={this.state.secret}
              onChange={this.onChangeSecret}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

module.exports = LoginContainer;
