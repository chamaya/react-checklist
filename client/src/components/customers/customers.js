import React, {Component} from 'react';
import './customers.css'

const request = require('request');
class Customers extends Component {
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

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
            .then(customers => this.setState(   {customers}, () => console.log('Customers fetched...', customers)   ));


    }

    render(){
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key={customer.id}>{ customer.firstName  }&nbsp;{customer.lastName}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Customers;
