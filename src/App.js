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
    };

    this._showActivity = this._showActivity.bind(this);
  }

  _showActivity(): ListView {
    if (this.state.activity) {
      var mentions = JSON.parse(this.state.activity);
      return (
        <ListView
          className="ListView"
          rowCount={mentions.length}
          rowHeight={20}
          renderItem={function(x, y, style) {
            const ins = AssStore.getInstance();
            const users = ins.getUsers();
            const user = users.get(mentions[y].author_id);
            const mes = mentions[y].message;
            const trimMes = mentions[y].message.substring(10, 100);
            return (
              <div style={style}>
                <a href={mentions[y].link} > #{mentions[y].id} </a> -
                {user.name}&emsp;
                {mes.length > 100 ? trimMes + '...' : trimMes}>
              </div>
            );
          }}
        />
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
                    activity: $resp,
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
