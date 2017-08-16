import React, { Component } from 'react';
import './Content.css';

import Bio from './Bio';
import Languages from './Languages';
import Projects from './Projects';
import Contact from './Contact';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Bio />
        <Languages />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Content;