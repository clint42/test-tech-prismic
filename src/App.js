import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';

import { logs } from './reducer';

import DataVizContainer from './components/DataVizContainer';

import logo from './logo.svg';
import './App.css';

const store = createStore(logs, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DataVizContainer />
      </Provider>
    );
  }
}

export default App;
