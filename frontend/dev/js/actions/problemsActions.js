
import axios from "axios";

export function fetchProblems() {
  return function(dispatch) {

    axios.get('http://localhost:9001/api/problems')
      .then((response) => {
        dispatch({type: 'FETCH_PROBLEMS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_PROBLEMS_REJECTED', payload: err})
      });
  }
}

export function createProblem(problem) {
  return function(dispatch) {

    axios.post('http://localhost:9001/api/problems', { name: problem.name })
      .then((response) => {
        console.log(response.data)
        dispatch({type: 'CREATE_PROBLEMS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'CREATE_PROBLEMS_REJECTED', payload: err})
      });
  }
}

export function deleteProblem(id) {
  return function(dispatch) {

    axios.delete('http://localhost:9001/api/problems/'+id)
      .then((response) => {
        dispatch({type: 'DELETE_PROBLEMS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'DELETE_PROBLEMS_REJECTED', payload: err})
      });
  }
}