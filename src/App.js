import DocumentTitle from 'react-document-title'
import React, { Component } from 'react';
import './App.css';
import Login from './ui/LoginContainer.js';
import AssStore from './store/AssStore.js';

const ListView = require('react-list-view');
const Enum = require('enum');


const ASSMode =
  new Enum([
    'LogOut',
    'Reviews',
    'Mentions',
  ]);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      mentions: [],
      mode: ASSMode.LogOut,
    };

    this._showActivity = this._showActivity.bind(this);
    this._renderListView = this._renderListView.bind(this);
    this._trim = this._trim.bind(this);
  }

  render() {
    const mentions = this._showActivity();
    const content = this._appContent();
    const menuBar = this._menuBar();

    return (
      <DocumentTitle title="Ass-Client">
        <div className="App" title="Home">
          <div className="line" />
          <div className="App-header">
            <div className="App-title">
              Ass-Client
            </div>
          </div>
            {menuBar}
          <div className="App-content">
            {content}
          </div>
        </div>
      </DocumentTitle>
    );
  }

  // with respect to the mode, we will show the content
  _appContent() {
    if (this.state.mode === ASSMode.LogOut) {
      return (
        <Login
          callback={($e, $r) => {
            const $o = JSON.parse($r);
            if ($o && !$o.code) {
              this.setState({
                mode: ASSMode.Reviews,
              });
            } else {
              alert('Authentication Failed!!');
            }
          }}
        />
      );
    } else if (this.state.mode === ASSMode.Reviews) {
      return (
        <div> reviews </div>
      );
    } else if (this.state.mode === ASSMode.Mentions) {
      return (
        <div> mentions </div>
      );
    }
  }

  // if user is logged in, shows the menu bar items
  _menuBar() {
    if (this.state.mode === ASSMode.LogOut) {
      return (
        <div className="menu-bar" />
      );
    } else {
      return (
        <div className="menu-bar">
          <div className="menu-bar-item">
            reviews
          </div>
          <div className="menu-bar-item">
            commits
          </div>
          <div className="menu-bar-item">
            mentions
          </div>
        </div>
      );
    }
  }


  _showActivity(): ListView {
    if (this.state.mentions) {
      return (
        <ListView
          className="ListView"
          rowCount={this.state.mentions.length}
          columnCount={2}
          rowHeight={30}
          columnWidth={180}
          renderItem={this._renderListView}
        />
      );
    }
  }

  _trim(s, l, padding) {
    return s.length > l ? s.substring(padding, l - padding) + '...' : s;
  };

  _renderListView(x, y, style) {
    const ins = AssStore.getInstance();
    const users = ins.getUsers();
    let user;
    if (users) {
      user = users.get(this.state.mentions[y].author_id);
    }

    if (x === 0) {
      return (
        <div style={style}>
          <a href={this.state.mentions[y].link}>
            #{this.state.mentions[y].id}
          </a>
          - @{this._trim(user.name, 5, 5)}&emsp;
        </div>
      );
    } else {
      return (
        <div style={style}>
          {this._trim(this.state.mentions[y].message, 120, 10)}
        </div>
      );

    }
  }
}

export default App;
