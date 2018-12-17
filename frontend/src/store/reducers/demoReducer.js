const initialState = {
  requestDemo : false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'REQUEST_DEMO':
    return { ...state, requestDemo : !state.requestDemo }

  default:
    return state
  }
}
