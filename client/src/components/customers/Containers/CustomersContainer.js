import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './customers.css';
import { connect } from "react-redux";
import Customer from '../Presentational/Customer.js';
import CustomerInfoContainer from './CustomerInfoContainer'

const request = require('request');
class Customers extends Component {

    static propTypes = {
        setCustomers: PropTypes.func.isRequired,
        customers: PropTypes.array.isRequired
    }

    componentDidMount(){
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => {
                this.props.setCustomers({type: "SET_CUSTOMERS", customers}); 
                console.log('Customers fetched...', customers)
            });
    }

    render(){
        console.log(this.props.customers);
        return (
            <div>
                <CustomerInfoContainer></CustomerInfoContainer>
                <h2>Customers:</h2>
                <ul>
                    {
                    this.props.customers.map(customer =>
                        <li key={customer.id}><Customer firstName={customer.firstName} lastName={customer.lastName}></Customer></li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customers: state.customers.customers
});

const mapDispatchToProps = (dispatch) => ({
    setCustomers: (customersAction) => dispatch(customersAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
