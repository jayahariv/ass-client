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
      key: 'a',
      secret: 's',
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
