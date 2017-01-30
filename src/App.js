import DocumentTitle from 'react-document-title'
import React, { Component } from 'react';
import './App.css';
import Login from './ui/LoginContainer.js';
import SideMenuContainer from './ui/SideMenuContainer.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
    };

    this._showActivity = this._showActivity.bind(this);
  }

  _showActivity(): void {
    console.log(this.state.activity);
  }

  render() {
    this._showActivity();
    return (
      <DocumentTitle title="Ass-Client">
        <div className="App" title="Home">
          <div className="App-header">
            <div className="App-title">
              Ass-Client
            </div>
          </div>
          <div className="App-content">
            <SideMenuContainer />
            <div className='App-middle'>
              {this.state.activity}
            </div>
            <Login
              callback={($error, $resp) => {
                this.setState({
                  activity: $resp,
                });
              }}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
