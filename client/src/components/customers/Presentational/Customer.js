import React, {Component} from 'react';

class Customer extends Component {
    render(){
        const {firstName, lastName, onDeleteCustomer, isDeleting} = this.props;
        return (
            <div>{ firstName }&nbsp;{lastName }
            <button onClick={ onDeleteCustomer }>DELETE</button>
            { isDeleting ? "PROCESSING": "" }
            </div>
        );
    }
}

export default Customer;
