const request = require('request');
export const SET_CUSTOMERS_BEGIN = "SET_CUSTOMERS_BEGIN";
export const SET_CUSTOMERS_SUCCESS = "SET_CUSTOMERS_SUCCESS";
export const SET_CUSTOMERS_FAILURE = "SET_CUSTOMERS_FAILURE";
//TODO: remove and uncomment 
export const DELETE_CUSTOMER_BEGIN = "DELETE_CUSTOMER_BEGIN";
export const DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS";
export const DELETE_CUSTOMER_FAILURE = "DELETE_CUSTOMER_FAILURE";
//TODO: remove and uncomment 
export const ADD_CUSTOMER = "ADD_CUSTOMER";
// export const ADD_CUSTOMER_BEGIN = "ADD_CUSTOMER_BEGIN";
// export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
// export const ADD_CUSTOMER_FAILURE = "ADD_CUSTOMER_FAILURE";

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
  return {
    type:ADD_CUSTOMER, customer
  }
}