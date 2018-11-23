import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';



import './App.scss';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';
import Router from './components/Router';

class App extends Component {
  render() {
    console.log("default state :", store.getState())
    return (
      <Provider store={store}>
          <div>
          

            <Router/>
          </div>
      </Provider>
    );
  }
}

export default App;
