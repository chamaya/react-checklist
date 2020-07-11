import React, {Component} from 'react';

class Customer extends Component {
    render(){
        return (
            <div>{ this.props.firstName }&nbsp;{ this.props.lastName }
            <button onClick={this.props.deleteCustomer}>DELETE</button>
            </div>
        );
    }
}

export default Customer;
