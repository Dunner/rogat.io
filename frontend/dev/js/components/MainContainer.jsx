/*
    ./client/components/MainContainer.jsx
*/
import React from 'react';

export default class MainContainer extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>

      );
  }
}