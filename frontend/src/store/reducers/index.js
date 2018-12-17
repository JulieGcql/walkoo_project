import { combineReducers } from 'redux';

import authReducer from './authReducer';
import demoReducer from './demoReducer';

export default combineReducers({
  authentification: authReducer,
  shared: demoReducer
});