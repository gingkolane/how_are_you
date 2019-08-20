import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from 'redux-starter-kit';
import './stylesheets/index.css';
import App from './App';
//import reducers
import conditionReducer from './reduxstore/condition'
import userReducer from './reduxstore/user'
import doctorReducer from './reduxstore/doctor'
import treatmentReducer from './reduxstore/treatment'
import trialReducer from './reduxstore/trial'
import recordReducer from './reduxstore/record'

const rootReducer = combineReducers({
  condition: conditionReducer,
  user: userReducer,
  doctor: doctorReducer,
  treatment: treatmentReducer,
  trial: trialReducer, 
  record: recordReducer
});

// create and configure store use redux-starter-kit
const store = configureStore({ reducer: rootReducer }); 

// Provide store to App
ReactDOM.render((
  <Provider store={store}>
      <App />
  </Provider>
), document.getElementById('root'));
