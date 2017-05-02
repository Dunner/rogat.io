/*
    ./client/components/TopBar.jsx
*/
import React from 'react';
import Navigation from './Navigation.jsx';
import { Link } from "react-router-dom";

export default class TopBar extends React.Component {

  constructor() {
    super();
    this.state = {
      showNav: false
    };
  }

  navToggle(e) {
    e.preventDefault();
    this.setState({
      showNav: !this.state.showNav
    })
  }

  render() {
    const navToggle = this.props.navToggle;
    const headerClass = this.state.showNav ? 'nav-show' : 'nav-hide'
    return (
      <header class={headerClass}>
        <Navigation navToggle={this.navToggle.bind(this)}/>
        <div class="topbar-wrapper">
          <div class="logo">
            <Link to="/">App</Link>
          </div>
          <nav onClick={this.navToggle.bind(this)}>
            Menu
          </nav>
        </div>
      </header>);
  }
}