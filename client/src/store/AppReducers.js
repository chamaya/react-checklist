import { combineReducers } from "redux";
import  customersReducer  from '../components/customers/Reducers/CustomersReducer';
import { reducer as formReducer } from 'redux-form'

const appReducers = {
    customers: customersReducer,
    form: formReducer 
};

const appReducer = combineReducers(appReducers);

export default appReducer;