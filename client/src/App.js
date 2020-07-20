import React from 'react';
import Customers from './components/customers/Containers/CustomersContainer';
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

let appStore = new store().getStore();
function App() {
  return (
    <div>
      <header >
        <Provider store = {appStore}>
          <ThemeProvider theme = {theme}>
            <Customers />
          </ThemeProvider>
        </Provider>
      </header>
    </div>
  );
}

export default App;
