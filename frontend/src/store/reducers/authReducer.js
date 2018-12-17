const defaultStates = {
  user: {
    userData: {
      token: '',
      user: '',
      isAdmin: false,
      id: 0,
      isConnected: false
    }
  }
}
export default (state = defaultStates, {type, payload}) => {
  switch (type) {
    case 'AUTH_USER':
    return { ...state, user: payload }
    case 'LOGOUT_USER' :
    return defaultStates
    default:
      return state
  }
}

