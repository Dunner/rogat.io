/*
  ./client/components/Users.jsx
*/
import React from 'react';
import { connect } from 'react-redux';

import { fetchProblems, createProblem, deleteProblem } from '../../actions/problemsActions'

@connect((store) => {
  return {
    problems: {
      problems: store.problems.problems,
      problemsFetched: store.problems.fetched,
      problemsFetching: store.problems.fetching,
      problemsError: store.problems.error,
    }
  }
})

export default class Problems extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchProblems());
  }

  createProblem() {
    this.props.dispatch(createProblem({name:'A problem'}));
  }
  deleteProblem(problem) {
    this.props.dispatch(deleteProblem(problem._id));
  }

  render() {

    const { problems } = this.props.problems;
    const mappedProblems = problems.map(problem => (
      <li key={problem._id}>{problem.name}
        <button onClick={this.deleteProblem.bind(this, problem)}>delete</button>
      </li>
    ))

    return (
      <div >

        <ul >
          {mappedProblems}
        </ul>
        <button onClick={this.createProblem.bind(this)} >Create Problem</button>

      </div>
    );
  }
}
