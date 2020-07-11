
const initialState = {
  customers: [{}]
}
function customersReducer(state = initialState, action){
  switch(action.type){
    case "SET_CUSTOMERS":
      return {
        customers: action.customers
      }
    case "ADD_CUSTOMER":
      return {
        customers: state.customers.concat([action.customer])
      }
    default:
      return state;
  }
}
export default customersReducer;