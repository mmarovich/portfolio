import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import { MenuItem, Menu } from 'material-ui/Menu';
import Popover from 'material-ui/Popover/Popover';

import './Header.css'
import logo from '../../assets/images/logo.svg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'right',
        vertical: 'top',
      },
    };

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
    return (
      <div className="header">
        <AppBar
          style={styles.appBar}
          titleStyle={{ height: '100%' }}
          title={<div className="title-container">
            <p className="title">Maxwell Marovich</p>
          </div>}
          showMenuIconButton={false}
          iconStyleRight={{marginRight: '0'}}
          iconElementRight={
            <div>
              <FlatButton
                href="#contact"
                label="Contact" />
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
                </Menu>
              </Popover>
            </div>
          }
        />
      </div>
    );
  }
}

const styles = {
  appBar: {
    zIndex: '0',
    backgroundColor: '#E1F5FE',
    height: '90px',
    padding: '10px 10px 0 0'
  },
  img: {
    width: '100%',
    height: '100%'
  }
};

export default Header;