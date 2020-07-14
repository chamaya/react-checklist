const request = require('request');
export const SET_CUSTOMERS_BEGIN = "SET_CUSTOMERS_BEGIN";
export const SET_CUSTOMERS_SUCCESS = "SET_CUSTOMERS_SUCCESS";
export const SET_CUSTOMERS_FAILURE = "SET_CUSTOMERS_FAILURE";
//TODO: remove and uncomment 
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
// export const DELETE_CUSTOMER_BEGIN = "DELETE_CUSTOMER_BEGIN";
// export const DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS";
// export const DELETE_CUSTOMER_FAILURE = "DELETE_CUSTOMER_FAILURE";
export const ADD_CUSTOMER = "ADD_CUSTOMER";
// export const ADD_CUSTOMER_BEGIN = "ADD_CUSTOMER_BEGIN";
// export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
// export const ADD_CUSTOMER_FAILURE = "ADD_CUSTOMER_FAILURE";

//Set Customer set of API calls
export function setCustomers(){
  return (dispatch, getState) =>{
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
      dispatch(setCustomersSuccess(customers));
      console.log('Customers fetched...', customers);
    });
  }
  // return async (dispatch, getState) => {
  //   dispatch(setCustomersBegin());
  //   try {
  //     const res = await fetch('/api/customers');
  //     const customers = await res.json();
  //     dispatch(setCustomersSuccess(customers));
  //     console.log('Customers fetched...', customers);
  //   }
  //   catch (error) {
  //     return dispatch(setCustomersFailure(error));
  //   }
  // }
};
export const setCustomersBegin = () => ({
    type: SET_CUSTOMERS_BEGIN
});
export const setCustomersSuccess = customers => ({
  type: SET_CUSTOMERS_SUCCESS, customers
});
export const setCustomersFailure = error => ({
  type: SET_CUSTOMERS_FAILURE, error
});

//Delete  Customer set of API calls
export function deleteCustomer(id){
  return {
    type: DELETE_CUSTOMER, id
  }
}
//Add  Customer set of API calls
export function addCustomer(customer){
  return {
    type:ADD_CUSTOMER, customer
  }
}