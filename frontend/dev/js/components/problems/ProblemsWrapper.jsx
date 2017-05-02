/*
  ./client/components/Users.jsx
*/
import React from 'react';

import Problems from './Problems.jsx'
import Solutions from './Solutions.jsx'

export default class ProblemsWrapper extends React.Component {

  render() {
    return (
      <div class="p-50">
        <Problems />
        <Solutions />
      </div>
    );
  }

}
