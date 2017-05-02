/*
    ./client/components/Navigation.jsx
*/
import React from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    const navToggle = this.props.navToggle;
    
    return (
      <div class="navigation-wrapper">
        <ul class="navigation-links">
          <li onClick={navToggle}><Link to="login" class="navigation-link">Login</Link></li>
          <li onClick={navToggle}><Link to="user" class="navigation-link">User</Link></li>
          <li onClick={navToggle}><Link to="problems" class="navigation-link">Problems</Link></li>
        </ul>
      </div>);
  }
}