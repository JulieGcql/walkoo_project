import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store';
import './App.scss';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';
import Router from './Router/Router';

class App extends Component {
  render() {
    console.log("default state :", store.getState())
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Router/>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
