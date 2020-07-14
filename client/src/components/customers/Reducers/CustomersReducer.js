
import {SET_CUSTOMERS_BEGIN, SET_CUSTOMERS_SUCCESS, SET_CUSTOMERS_FAILURE, DELETE_CUSTOMER, ADD_CUSTOMER} from "../Actions/CustomersActions";

const initialState = {
  customers: [{}],
  loadingSetCustomers: true,
  setCustomersError: null,
}
export default function customersReducer(state = initialState, action){
  switch(action.type){
    case SET_CUSTOMERS_BEGIN:
      return {
        ...state,
        loadingSetCustomers: true
      }
    case SET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loadingSetCustomers: false,
        customers: action.customers
      }
    case SET_CUSTOMERS_FAILURE:
      return {
        ...state,
        loadingSetCustomers: false,
        setCustomersError: action.error
      }  
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: state.customers.concat([action.customer])
      }
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(({id})=> id !== action.id)
      }
    default:
      return state;
  }
}