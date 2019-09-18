import React, { Component } from 'react';
const custData = require('./CustomerData/customer-data.json');

class CustomerDetails extends Component {
    render (){
        const { id } = this.props.match.params;
        const customer = custData[id];
        return (
            <div>
                <h4>{customer.id}</h4>
                <h4>{customer.fname} {customer.lname}</h4>
                <h4>{customer['car-model']}</h4>
                <h4>{customer['car-colour']}</h4>
            </div>
        );
    }
}

export default CustomerDetails;