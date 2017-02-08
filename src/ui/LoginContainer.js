import AssemblaAPI from '.././service/AssemblaAPI.js';
import React from 'react';
import './LoginContainer.css';
import AssStore from '.././store/AssStore.js';
import Constant from '.././Constants.js';

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
  }

  componentDidMount() {
    AssemblaAPI.getFile(
      Constant.PASSWORD_PATH,
      (e, r) => {
        const ps = r.split(" ");
        AssStore.getInstance().key = ps[0];
        AssStore.getInstance().secret = ps[1];
        AssStore.getInstance().space_id = ps[2];
        AssStore.getInstance().author_id = ps[3];

        this.setState({
          key: AssStore.getInstance().key,
          secret: AssStore.getInstance().secret,
        });
      },
    );
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
