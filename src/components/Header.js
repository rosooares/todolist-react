import React, { Component } from 'react';

import '../css/Header.css';


class Header extends Component {
  render() {
    return  (
      <nav className="navbar">
        <h3 className="logo">ToDo List</h3>
      </nav>
    );
  }
}

export default Header;