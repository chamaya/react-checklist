import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import CustomerInfoForm from '../Presentational/CustomerInfoForm.js'

class CustomerInfoContainer extends Component {

    static propTypes = {
        addCustomer: PropTypes.func.isRequired,
    }

    onSubmit(values){
        // fetch('/api/customers')
        //     .then(res => res.json())
        //     .then(customers => {
        //         this.props.setCustomers({type: "SET_CUSTOMERS", customers}); 
        //         console.log('Customers fetched...', customers)
        //     });
        const agentId = 3;
        console.log("HERE ARE THE VALUES ", values);
    }

    render(){
        return (
            <div>
                <h2>Add Customer</h2>
                <CustomerInfoForm onSubmit = { this.onSubmit }></CustomerInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addCustomer: (addCustomerAction) => dispatch(addCustomerAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfoContainer);
