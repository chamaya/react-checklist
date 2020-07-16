export const SET_CUSTOMERS_BEGIN = "SET_CUSTOMERS_BEGIN";
export const SET_CUSTOMERS_SUCCESS = "SET_CUSTOMERS_SUCCESS";
export const SET_CUSTOMERS_FAILURE = "SET_CUSTOMERS_FAILURE";
export const DELETE_CUSTOMER_BEGIN = "DELETE_CUSTOMER_BEGIN";
export const DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS";
export const DELETE_CUSTOMER_FAILURE = "DELETE_CUSTOMER_FAILURE";
export const ADD_CUSTOMER_BEGIN = "ADD_CUSTOMER_BEGIN";
export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const ADD_CUSTOMER_FAILURE = "ADD_CUSTOMER_FAILURE";

const request = require('request');
//Set Customer set of API calls
export function setCustomers(){
  return async (dispatch, getState) =>{
    dispatch(setCustomersBegin());
    var options = {
      'method': 'GET',
      'url': 'http://localhost:5000/api/customers',
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) return dispatch(setCustomersFailure(error));
      const customers = JSON.parse(response.body);
      console.log('Customers fetched...', customers);
      return dispatch(setCustomersSuccess(customers));
    });
  }
};
const setCustomersBegin = () => ({
    type: SET_CUSTOMERS_BEGIN
});
const setCustomersSuccess = customers => ({
  type: SET_CUSTOMERS_SUCCESS, customers
});
const setCustomersFailure = error => ({
  type: SET_CUSTOMERS_FAILURE, error
});

//Delete  Customer set of API calls
export function deleteCustomer(id){
  return (dispatch, getState)=>{
    dispatch(deleteCustomerBegin(id));
    var options = {
      'method': 'DELETE',
      'url': `http://localhost:5000/api/customer/${id}`,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) return dispatch(deleteCustomerFailure(error, id));
      const {deletedId, message} = JSON.parse(response.body);
      console.log(message);
      return dispatch(deleteCustomerSuccess(parseInt(deletedId)));
    });
  }
}
const deleteCustomerBegin = (id) => ({
  type: DELETE_CUSTOMER_BEGIN, id
});
const deleteCustomerSuccess = (id) => ({
    type: DELETE_CUSTOMER_SUCCESS, id
});
const deleteCustomerFailure = (error, id) => ({
  type: DELETE_CUSTOMER_FAILURE, error, id
});

//Add  Customer set of API calls
export function addCustomer(customer){
  return async (dispatch, getState) => {
    dispatch(addCustomerBegin())
    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/api/customer/',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    };
    request(options, function (error, response) {
      if (error) dispatch(addCustomerFailure());
      const customerResponse = JSON.parse(response.body);
      console.log("Added Customer: ", customerResponse);
      dispatch(addCustomerSuccess(customerResponse));
    });
  }
}
const addCustomerBegin = ()=>({
    type : ADD_CUSTOMER_BEGIN
});
const addCustomerSuccess = (customer)=>({
    type:ADD_CUSTOMER_SUCCESS, customer
});
const addCustomerFailure = ()=>({
    type:ADD_CUSTOMER_FAILURE
});