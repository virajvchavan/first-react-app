import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'
import LoginContainer from './containers/LoginContainer.jsx'

class App extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <div className="App">
          <LoginContainer />
        </div>
      </div>
    );
  }
}

export default App;
