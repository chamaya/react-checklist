import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Customer from '../Presentational/Customer.js';
import CustomerInfoContainer from './CustomerInfoContainer';
import { setCustomers, deleteCustomer } from "../Actions/CustomersActions";
import styles from "./styles";


class Customers extends Component {

    static propTypes = {
        setCustomers: PropTypes.func.isRequired,
        customers: PropTypes.array.isRequired,
        isLoadingSetCustomers: PropTypes.bool.isRequired,
        setCustomersError: PropTypes.object,
        deletingCustomers: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.setCustomers();
    }

    customersBody(){
        const { setCustomersError, customers, isLoadingSetCustomers, deletingCustomers } = this.props;
        if (setCustomersError) {
            return <div>Error! {setCustomersError.message}</div>;
        }
      
        if (isLoadingSetCustomers) {
            return <div>Loading...</div>;
        }
        return(
        <ul >
            {customers.map(customer =>
                <li key={customer.id} style={styles.liCustomer}>
                    <Customer firstName={customer.firstName} lastName={customer.lastName} 
                        onDeleteCustomer={() => this.props.deleteCustomer(customer.id)}
                        isDeleting = {deletingCustomers.includes(customer.id)}
                        >
                    </Customer>
                </li>)}
        </ul>
        )
    }

    render(){
        return (
            <div>
                <CustomerInfoContainer></CustomerInfoContainer>
                <h2>Customers:</h2>
                {this.customersBody()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customers: state.customers.customers,
    isLoadingSetCustomers: state.customers.isLoadingSetCustomers,
    setCustomersError: state.customers.setCustomersError,
    deletingCustomers: state.customers.deletingCustomers
});

const mapDispatchToProps = (dispatch) => ({
    setCustomers: () => dispatch( setCustomers() ),
    deleteCustomer: (id) => dispatch( deleteCustomer(id) ),
});


export default connect(mapStateToProps, mapDispatchToProps)(Customers);
