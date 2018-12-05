const defaultStates = {
  user: {
    userData: {
      user: '',
      isAdmin: false,
      id: 0,
      token: '',
      isConnected: false
    }
  }
}
export default (state = defaultStates, {type, payload}) => {
  switch (type) {
    case 'AUTH_USER':
    return { ...state, user: payload }
    default:
      return state
  }
}

