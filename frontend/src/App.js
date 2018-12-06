import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store';
import './App.scss';
import Router from './Router/Router';
import AdminRouter from './Router/AdminRouter';

class App extends Component {
  render() {
    console.log("default state :", store.getState())
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Router/>
              <AdminRouter/>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
