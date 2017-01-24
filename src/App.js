import DocumentTitle from 'react-document-title'
import React, { Component } from 'react';
import './App.css';
import Login from './ui/LoginContainer.js';

class App extends Component {

  render() {
    return (
      <DocumentTitle title="Ass-Client">
        <div className="App" title="Home">
          <div className="App-header">
            <h2>Ass-Client</h2>
          </div>
          <p></p>
          <Login />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
