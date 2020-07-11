
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
    case "DELETE_CUSTOMER":
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:5000/api/customer/${action.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      return {
        customers: state.customers.filter(({id})=> id !== action.id)
      }
    default:
      return state;
  }
}
export default customersReducer;