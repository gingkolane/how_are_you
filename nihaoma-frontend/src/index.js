import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from 'redux-starter-kit';
//
import conditionReducer from './reduxstore/condition'
import userReducer from './reduxstore/user'
import conditionsUserReducer from './reduxstore/conditionsUser.js'
// import groupsUserReducer from './reduxstore/groupsUser.js'

import './stylesheets/index.css';
import App from './App';

const rootReducer = combineReducers({
  condition: conditionReducer,
  user: userReducer,
  conditionsUser: conditionsUserReducer
});

// create and configure store use redux-starter-kit
const store = configureStore({ reducer: rootReducer }); 

ReactDOM.render((
  <Provider store={store}>
      <App />
  </Provider>
), document.getElementById('root'));
