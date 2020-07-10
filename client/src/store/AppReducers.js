import { combineReducers } from "redux";
import  customersReducer  from '../components/customers/Reducers/CustomersReducer';

const appReducers = {
    customers: customersReducer
};

const appReducer = combineReducers(appReducers);

export default appReducer;