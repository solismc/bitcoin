import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyList from './CurrencyList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <section className="App-intro">
          <CurrencyList/>
        </section>
      </div>
    );
  }
}

export default App;







