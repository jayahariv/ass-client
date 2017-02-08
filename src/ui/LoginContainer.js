import AssemblaAPI from '.././service/AssemblaAPI.js';
import React from 'react';
import './LoginContainer.css';
import AssStore from '.././store/AssStore.js';

const {PropTypes} = React;

type Props = {
  callback: Function,
}

class LoginContainer extends React.Component<void, Props, void> {
  props: Props;

  static PropTypes = {
    callback: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      key: 'e68488890419de9a030d',
      secret: '3875a0a5c1e73a97380c6dadbad884e9f0b1a3b4',
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
    AssStore.getInstance().key = this.state.key;
    AssStore.getInstance().secret = this.state.secret;
    AssemblaAPI.getActivity(
      this.props.callback,
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="LoginContainer">
        <div>
          <input
            className='InputStyle'
            type='text'
            placeholder='key'
            value={this.state.key}
            onChange={this.onChangeKey}
          />
        </div>
        <div className="padding" />
        <div>
          <input
            className='InputStyle'
            type='text'
            placeholder='secret'
            value={this.state.secret}
            onChange={this.onChangeSecret}
          />
        </div>
        <div className="padding" />
        <button
          type="button"
          className="button"
          onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    );
  }
}

module.exports = LoginContainer;
