import React, { Component } from 'react';
import axios from 'axios';

class CustomerDetails extends Component {
    constructor(props) { 
        super(props); 
        this.state ={ 
            customer: {}, 
        } 
    } 
        
        
    async componentDidMount() { 
        const cid = this.props.match.params.id; 
        const customer = await axios.get('/customers/' + cid).then(res => res.data); 
        this.setState({ 
            customer 
        }); 
    }; 
       
    render (){
        const customer = this.state.customer;
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
                            <td>Customer Car Model</td>
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