import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import CustomerInfoForm from '../Presentational/CustomerInfoForm.js'

class CustomerInfoContainer extends Component {

    static propTypes = {
        addCustomer: PropTypes.func.isRequired,
    }

    onSubmit(addCustomer, values){
        const agentId = 1;
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({"firstName": values.firstName, "lastName": values.lastName,"email":values.email,"agent":agentId});

        let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/customer", requestOptions)
        .then(response => response.text())
        .then(result => addCustomer(JSON.parse(result)))
        .catch(error => console.log('error', error));
    }

    render(){
        return (
            <div>
                <h2>Add Customer</h2>
                <CustomerInfoForm onSubmit = { (values) => {this.onSubmit(this.props.addCustomer, values)} }></CustomerInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addCustomer: (customer) => dispatch({type:"ADD_CUSTOMER", customer})
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfoContainer);
