// npm imports
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// Components/Utils
import IncrementComponent from './increment';
import rootReducer from './reducers';

// Static files
import logo from './logo.svg';

// Stylesheets
import './App.css';
import './bootstrap.css';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Now</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <IncrementComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
