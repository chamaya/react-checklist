
import {SET_CUSTOMERS_BEGIN, SET_CUSTOMERS_SUCCESS, SET_CUSTOMERS_FAILURE, 
  DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_BEGIN, DELETE_CUSTOMER_FAILURE, 
  ADD_CUSTOMER} from "../Actions/CustomersActions";

const initialState = {
  customers: [{}],
  isLoadingSetCustomers: true,
  setCustomersError: null,
  deletingCustomers: [],
  deleteCustomerError: null,
}
export default function customersReducer(state = initialState, action){
  switch(action.type){
    case SET_CUSTOMERS_BEGIN:
      return {
        ...state,
        isLoadingSetCustomers: true
      }
    case SET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isLoadingSetCustomers: false,
        customers: action.customers
      }
    case SET_CUSTOMERS_FAILURE:
      return {
        ...state,
        isLoadingSetCustomers: false,
        setCustomersError: action.error
      }  
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: state.customers.concat([action.customer])
      }
    case DELETE_CUSTOMER_BEGIN:
      return {
        ...state,
        deletingCustomers: state.deletingCustomers.concat([action.id])
      }
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.filter(({id})=> id !== action.id),
        deletingCustomers: state.deletingCustomers.filter(id => id != action.id)
      }
    case DELETE_CUSTOMER_FAILURE:
      return{
        ...state,
        deleteCustomerError: action.error,
        deletingCustomers: state.deletingCustomers.filter(id => id != action.id)
      }
    default:
      return state;
  }
}