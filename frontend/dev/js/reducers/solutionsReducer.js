export default function reducer(state={
  solutions: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch(action.type) {

    case "FETCH_SOLUTIONS": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_SOLUTIONS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_SOLUTIONS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        solutions: action.payload
      }
    }
    case "CREATE_SOLUTIONS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        solutions: state.solutions.concat(action.payload)
      }
    }
    case "DELETE_SOLUTIONS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        solutions: state.solutions.filter((solution) => solution._id !== action.payload)
      }
    }

  }

  return state

}