export default function reducer(state={
  user: {
    name: null
  }
}, action) {

  switch(action.type) {

    case "ADD_USER": {
      console.log('');
      return {
        ...state
      }
    }

  }

  return state

}