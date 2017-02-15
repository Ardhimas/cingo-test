import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

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
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
