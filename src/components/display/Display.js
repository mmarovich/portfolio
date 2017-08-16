import React, { Component } from 'react';
import './Display.css';

import portfolio from '../portfolio.json';


class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="quotes-container">
          <p className="socrates">The One True Wisdom Is Knowing That You Know Nothing</p>
        </div>

        <div className="image-container">
          <img className="max" src={portfolio.image} />
        </div>
      </div>
    );
  }
}

export default Display;