import React from 'react';
import logo from './logo.svg';
import Customers from './components/customers/Containers/CustomersContainer';
import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  customers: [{}]
}
function reducer(state = initialState, action){
  switch(action.type){
    case "SET_CUSTOMERS":
      return {
        customers: action.customers
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({type: "SET_CUSTOMERS", customers: [{id: 999, firstName: 'default', lastName: "test"}]})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store = {store}>
          <Customers />
        </Provider>
      </header>
    </div>
  );
}

export default App;
