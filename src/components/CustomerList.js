import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

class CustomerList extends Component{
    constructor(props) {
        super(props);
        this.state ={
            customers: [],
        }
    }

    async componentDidMount() { 
        const customers = await axios.get('/customers').then(res => res.data); 
        this.setState({ 
            customers 
        }); 
    }; 
       

    render (){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.customers.map(row =>(
                            <tr>
                                <td>
                                <Link to={'/customer/' + row.id} className="App-link">{row.id}</Link>
                                </td>
                                <td>
                                    {row.fname} {row.lname}
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        );
    }
}


export default CustomerList;