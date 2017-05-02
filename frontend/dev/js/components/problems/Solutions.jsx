/*
  ./client/components/Users.jsx
*/
import React from 'react';
import { connect } from 'react-redux';

import { fetchSolutions, createSolution, deleteSolution } from '../../actions/solutionsActions'

@connect((store) => {
  return {
    solutions: {
      solutions: store.solutions.solutions,
      solutionsFetched: store.solutions.fetched,
      solutionsFetching: store.solutions.fetching,
      solutionsError: store.solutions.error
    }
  }
})
export default class Solutions extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchSolutions());
  }

  createSolution() {
    this.props.dispatch(createSolution({name:'A solution'}));
  }
  deleteSolution(solution) {
    this.props.dispatch(deleteSolution(solution._id));
  }

  render() {

    const { solutions } = this.props.solutions;
    const mappedSolutions = solutions.map(solution => (
      <li key={solution._id}>{solution.name}
        <button onClick={this.deleteSolution.bind(this, solution)}>delete</button>
      </li>
    ))

    return (
      <div>

        <ul >
          {mappedSolutions}
        </ul>
        <button onClick={this.createSolution.bind(this)} >Create Solution</button>

      </div>
    );
  }
}