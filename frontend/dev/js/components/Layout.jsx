/*
    ./client/components/Layout.jsx
*/
import React from 'react';
import { connect } from 'react-redux';

import { HashRouter as Router, Route, hashHistory } from "react-router-dom";

import MainContainer from './MainContainer.jsx';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import Empty from './Empty.jsx';
import WorldMap from './worldmap/WorldMap.jsx';

import ProblemsWrapper from './problems/ProblemsWrapper.jsx';

import Login from './auth/Login.jsx';
import User from './user/User.jsx';



@connect((store) => {
  return {
    user: store.user.user
  }
})
export default class Layout extends React.Component {

  render() {

    return (
      <Router history={hashHistory}>
        <div>
          <TopBar />

          <MainContainer>
            <Route exact={true} path="/" component={WorldMap}/>
            <Route path="/login" component={Login}/>
            <Route path="/user" component={User}/>
            <Route path="/problems" component={ProblemsWrapper}/>
          </MainContainer>

          <Footer />
        </div>
      </Router>
    );

  }
}