import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers} from "redux"
import { Provider } from 'react-redux'

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

const initialState = {
  result: 10000,
  value: []
}

const userReducer = (state={name:'kong', age:'15'}, action) => {
  switch (action.type) {
    case "setName":
      state={
        ...state,
        name: action.payload
      }
    break;
    case "setAge":
      state={
        ...state,
       age:action.payload
      }
    break;
    default:
  }
  return state
}

const employeeReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD":
      state={
        ...state,
        result: state.result+=action.payload,
        value: [...state.value,action.payload]
      }
    break;
    case "SUBTRACT":
      state={
        ...state,
        result: state.result-=action.payload,
        value: [...state.value,action.payload]
      }
    break;
    default:
  }
  return state
}

const store = createStore(combineReducers({
  emp:employeeReducer,
  user:userReducer
}),devtools)



store.subscribe(() => {
  console.log("update store", store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();