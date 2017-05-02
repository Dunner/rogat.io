export default function reducer(state={
  problems: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch(action.type) {

    case "FETCH_PROBLEMS": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_PROBLEMS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_PROBLEMS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        problems: action.payload
      }
    }
    case "CREATE_PROBLEMS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        problems: state.problems.concat(action.payload)
      }
    }

    case "DELETE_PROBLEMS_FULFILLED": {
      console.log(action.payload)
      return {
        ...state,
        fetching: false,
        fetched: true,
        problems: state.problems.filter((problem) => problem._id !== action.payload)
      }
    }

  }

  return state

}