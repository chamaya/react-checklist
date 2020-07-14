import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './customers.css';
import { connect } from "react-redux";
import Customer from '../Presentational/Customer.js';
import CustomerInfoContainer from './CustomerInfoContainer'
import { setCustomers, deleteCustomer } from "../Actions/CustomersActions"

class Customers extends Component {

    static propTypes = {
        setCustomers: PropTypes.func.isRequired,
        customers: PropTypes.array.isRequired,
        loadingSetCustomers: PropTypes.bool.isRequired,
        setCustomersError: PropTypes.object
    }

    componentDidMount(){
        this.props.setCustomers();
    }

    deleteCustomer(id){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        fetch(`/api/customer/${id}`, requestOptions)
        .then(res => res.json())
        .then(response => {
            console.log(response.message);
            this.props.deleteCustomer(id);
        })
        .catch(error => console.log('error', error));
    }

    customersBody(){
        const { setCustomersError, customers, loadingSetCustomers } = this.props;
        if (setCustomersError) {
            return <div>Error! {setCustomersError.message}</div>;
        }
      
        if (loadingSetCustomers) {
            return <div>Loading...</div>;
        }
        return(
        <ul>
            {customers.map(customer =>
                <li key={customer.id}>
                    <Customer firstName={customer.firstName} lastName={customer.lastName} 
                        deleteCustomer={() => this.deleteCustomer(customer.id)}>
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
    loadingSetCustomers: state.customers.loadingSetCustomers,
    setCustomersError: state.customers.setCustomersError
});

const mapDispatchToProps = (dispatch) => ({
    setCustomers: () => dispatch( setCustomers() ),
    deleteCustomer: (id) => dispatch( deleteCustomer(id) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
