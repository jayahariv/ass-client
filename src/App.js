import DocumentTitle from 'react-document-title'
import React, { Component } from 'react';
import './App.css';
import Login from './ui/LoginContainer.js';
import SideMenuContainer from './ui/SideMenuContainer.js';

class App extends Component {

  render() {
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
            <div className='App-middle' />
            <Login />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
