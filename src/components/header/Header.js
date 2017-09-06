import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import { MenuItem, Menu } from 'material-ui/Menu';
import Popover from 'material-ui/Popover/Popover';
// import TiThMenu from 'react-icons/lib/ti/th-menu'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'middle',
        vertical: 'top',
      },
      width: ''
    };

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

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  render() {
    if (this.state.width < 450) {
      return (
        <div className="header">
          <AppBar
            style={styles.appBar}
            titleStyle={{ height: '100%', lineHeight: '50px' }}
            title={<div className="title-container">
              <p className="title">Maxwell Marovich</p>
            </div>}
            showMenuIconButton={false}
            iconStyleRight={{ marginRight: '0' }}
            iconElementRight={
              <div className="nav-buttons">
                <FlatButton
                  onTouchTap={this.handleTouchTap}
                  label="Menu" />
                <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={this.state.anchorOrigin}
                  targetOrigin={this.state.targetOrigin}
                  onRequestClose={this.handleRequestClose}
                >
                  <Menu>
                    <MenuItem href="#projects" primaryText="Projects" />
                    <MenuItem href="#contact" primaryText="Contact" />
                  </Menu>
                </Popover>
              </div>
            }
          />
        </div>
      );
    } else {
      return (
        <div className="header">
          <AppBar
            style={styles.appBar}
            titleStyle={{ height: '100%', lineHeight: '50px' }}
            title={<div className="title-container">
              <p className="title">Maxwell Marovich</p>
            </div>}
            showMenuIconButton={false}
            iconStyleRight={{ marginRight: '0' }}
            iconElementRight={
              <div className="nav-buttons">
                <FlatButton
                  onTouchTap={this.handleTouchTap}
                  label="Projects" />
                <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={this.state.anchorOrigin}
                  targetOrigin={this.state.targetOrigin}
                  onRequestClose={this.handleRequestClose}
                >
                  <Menu>
                    <MenuItem href="#politikos" primaryText="Politikos" />
                    <MenuItem href="#whether" primaryText="Whether" />
                    <MenuItem href="#war" primaryText="War: The Card Game" />
                  </Menu>
                </Popover>
                <FlatButton
                  href="#contact"
                  label="Contact" />
              </div>
            }
          />
        </div>
      );
    }
  }
}

const styles = {
  appBar: {
    zIndex: '0',
    backgroundColor: 'white',
    height: '75px',
    padding: '10px 10px 0 3%',
  },
  img: {
    width: '100%',
    height: '100%'
  }
};

export default Header;