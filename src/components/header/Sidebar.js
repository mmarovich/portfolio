import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu isOpen={false} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <ul>
          <li><Link to="/observation1">Observation 1</Link></li>
          <li><Link to="/observation2">Observation 2</Link></li>
        </ul>
      </Menu>
    );
  }
}

export default Sidebar;