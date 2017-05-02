
import axios from "axios";

export function fetchSolutions() {
  return function(dispatch) {

    axios.get('http://localhost:9001/api/solutions')
      .then((response) => {
        dispatch({type: 'FETCH_SOLUTIONS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_SOLUTIONS_REJECTED', payload: err})
      });
  }
}

export function createSolution(solution) {
  return function(dispatch) {

    axios.post('http://localhost:9001/api/solutions', { name: solution.name })
      .then((response) => {
        dispatch({type: 'CREATE_SOLUTIONS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'CREATE_SOLUTIONS_REJECTED', payload: err})
      });
  }
}

export function deleteSolution(id) {
  return function(dispatch) {

    axios.delete('http://localhost:9001/api/solutions/'+id)
      .then((response) => {
        dispatch({type: 'DELETE_SOLUTIONS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'DELETE_SOLUTIONS_REJECTED', payload: err})
      });
  }
}