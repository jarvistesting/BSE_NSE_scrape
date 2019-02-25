import React, { Component } from 'react';
import logo from './logo.svg';
import BSENSE from './components/bse_nse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Scraping</h1>
        </header>
        <BSENSE />
      </div>
    );
  }
}

export default App;
