import React, { Component } from 'react';
import { Link } from "react-router-dom";

const custData = require('./CustomerData/customer-id.json');

class CustomerList extends Component{
    constructor(props) {
        super(props);
        this.state ={
            selected: false,
        }
    }

    onClick(id) {
        this.setState({ selected: id });
    }

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
                        custData.map(row =>(
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