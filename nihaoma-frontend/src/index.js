import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from 'redux-starter-kit';

import diseaseReducer from './slices/diseaseSlice.js'

import './stylesheets/index.css';
import App from './App';


const rootReducer = combineReducers({diseases: diseaseReducer})

// create and configure store use redux-starter-kit
const store = configureStore({ reducer: rootReducer }); 

ReactDOM.render((
  <Provider store={store}>
      <App />
  </Provider>
), document.getElementById('root'));
