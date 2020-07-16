import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import CustomerInfoForm from '../Presentational/CustomerInfoForm.js'
import { addCustomer } from '../Actions/CustomersActions'

class CustomerInfoContainer extends Component {

    static propTypes = {
        addCustomer: PropTypes.func.isRequired,
        isAddingCustomer: PropTypes.bool.isRequired,
    }

    onSubmit(addCustomer, customer){
        customer.agent = 1; //Remove when agent is created (reducer and more)
        addCustomer(customer);
    }

    render(){
        const { isAddingCustomer, addCustomer } = this.props;
        return (
            <div>
                <h2>Add Customer</h2>
                <CustomerInfoForm onSubmit = { (customer) => this.onSubmit(addCustomer, customer) } isAdding={ isAddingCustomer }></CustomerInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAddingCustomer: state.customers.isAddingCustomer
});

const mapDispatchToProps = (dispatch) => ({
    addCustomer: (customer) => dispatch(addCustomer(customer))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfoContainer);
