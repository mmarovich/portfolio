import React, { Component } from 'react';

import './App.css';
import Header from './components/header/Header';
import Display from './components/display/Display';
import background from '../src/assets/images/space.png';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={background} className="background" />
        <Header />
        <Display />
        <Content />
      </div>
    );
  }
}

export default App;
