import DocumentTitle from 'react-document-title'
import React, { Component } from 'react';
import './App.css';
import Login from './ui/LoginContainer.js';
import SideMenuContainer from './ui/SideMenuContainer.js';
import AssStore from './store/AssStore.js';

const ListView = require('react-list-view');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      mentions: [],
    };

    this._showActivity = this._showActivity.bind(this);
    this._renderListView = this._renderListView.bind(this);
    this._trim = this._trim.bind(this);
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

  render() {
    const mentions = this._showActivity();
    return (
      <DocumentTitle title="Ass-Client">
        <div className="App" title="Home">
          <div className="App-header">
            <div className="App-title">
              Ass-Client
            </div>
          </div>
          <div className="App-content">
            <div className='App-left'>
              <SideMenuContainer />
            </div>
            <div className="App-gap" />
            <div className='App-middle'>
              {mentions}
            </div>
            <div className="App-gap" />
            <div className='App-right'>
              <Login
                callback={($error, $resp) => {
                  this.setState({
                    mentions: JSON.parse($resp),
                  });
                }}
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
