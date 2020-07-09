import React, {Component} from 'react';
import './customers.css'
import { connect } from "react-redux";

const request = require('request');
class Customers extends Component {

    componentDidMount(){
        // var options = {
        //     'method': 'GET',
        //     'url': 'http://localhost:5000/api/customers',
        //     'headers': {
        //     },
        //   };
        //   request(options, function (error, response) {
        //     if (error) throw new Error(error);
        //     console.log(response.body);
        //   });

        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => {
                this.props.dispatch({type: "SET_CUSTOMERS", customers}); 
                console.log('Customers fetched...', customers)
            });


    }

    render(){
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {
                    this.props.customers.map(customer =>
                        <li key={customer.id}>{ customer.firstName  }&nbsp;{customer.lastName}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customers: state.customers
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps)(Customers);
