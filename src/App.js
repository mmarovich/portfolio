import React, { Component } from 'react';

import './App.css';
import Header from './components/header/Header';
import Display from './components/display/Display';
import background from '../src/assets/images/PortfolioBanner.PNG';
import backgroundSmall from '../src/assets/images/PortfolioBannerSmall.PNG'
import Content from './components/content/Content';

class App extends Component {
  constructor(props) {
    super(props)

    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      width:  ''
    }

  }

  updateDimensions() {
      this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.width < 650 ? backgroundSmall : background} className="background" />
        <Header />
        <Display />
        <Content />
      </div>
    );
  }
}

export default App;
