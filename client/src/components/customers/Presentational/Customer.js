import React, {Component} from 'react';

class Customer extends Component {
    render(){
        return (
            <div>{ this.props.firstName }&nbsp;{ this.props.lastName }</div>
        );
    }
}

export default Customer;
