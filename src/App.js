import DocumentTitle from 'react-document-title'
import React, { Component } from 'react';
import './App.css';
import Login from './ui/LoginContainer.js';
import SideMenuContainer from './ui/SideMenuContainer.js';
const ListView = require('react-list-view');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
    };

    this._showActivity = this._showActivity.bind(this);
  }

  _showActivity(): void {
    if (this.state.activity) {
      var myObject = JSON.parse(this.state.activity);
      console.log(myObject.length);
      return (
        <ListView
          rowCount={this.state.activity.length}
          rowHeight={20}
          renderItem={(x, y, style) =>
            <div style={style}>
              Item #{x} #{y}
            </div>
          }
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
            <Login
              callback={($error, $resp) => {
                this.setState({
                  activity: $resp,
                });
              }}
            />
            <div className='App-middle'>
              {mentions}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
