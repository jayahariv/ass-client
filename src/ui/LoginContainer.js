import AssemblaAPI from '.././service/AssemblaAPI.js';
import React from 'react';
import './LoginContainer.css';
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
    AssemblaAPI.getMentions(
      this.state.key,
      this.state.secret,
      this.props.callback,
    );
    // AssemblaAPI.getActivity(
    //   this.state.key,
    //   this.state.secret,
    //   this.props.callback,
    // );
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
