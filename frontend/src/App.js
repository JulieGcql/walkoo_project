import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';

import './App.css';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

class App extends Component {
  render() {
    console.log("default state :", store.getState())
    return (
      <Provider store={store}>
          <div>
            <LoginForm/>
            <Profile />
          </div>
      </Provider>
    );
  }
}

export default App;
