import React from 'react';
import logo from './logo.svg';
import Customers from './components/customers/Containers/CustomersContainer';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";

let appStore = new store().getStore();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store = {appStore}>
          <Customers />
        </Provider>
      </header>
    </div>
  );
}

export default App;
