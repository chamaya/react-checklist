
const initialState = {
  customers: [{}]
}
function customersReducer(state = initialState, action){
  switch(action.type){
    case "SET_CUSTOMERS":
      return {
        customers: action.customers
      }
    default:
      return state;
  }
}
export default customersReducer;