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
      key: '',
      secret: '',
    };

    this.onChangeKey = this.onChangeKey.bind(this);
    this.onChangeSecret = this.onChangeSecret.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._responseFromUsers = this._responseFromUsers.bind(this);
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
    AssemblaAPI.getUsers(
      this.state.key,
      this.state.secret,
      this._responseFromUsers,
    );
    event.preventDefault();
  }

  _responseFromUsers($e, $r) {
    var users = JSON.parse($r);
    let user_list = new Map();
    for (var user of users) {
      user_list.set(user.id, user);
    }
    AssStore.getInstance().users = user_list;
    AssemblaAPI.getMentions(
      this.state.key,
      this.state.secret,
      this.props.callback,
    );
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
