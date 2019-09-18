import React, { Component } from 'react';
const custData = require('./CustomerData/customer-data.json');

class CustomerDetails extends Component {
    render (){
        const { id } = this.props.match.params;
        const customer = custData[id];
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Customer Id</td>
                            <td>{customer.id}</td>
                        </tr>
                        <tr>
                            <td>Customer Name</td>
                            <td>{customer.fname} {customer.lname}</td>
                        </tr>
                        <tr>
                            <td>Customer Car Modeld</td>
                            <td>{customer['car-model']}</td>
                        </tr>
                        <tr>
                            <td>Customer Car colour</td>
                            <td>{customer['car-colour']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerDetails;