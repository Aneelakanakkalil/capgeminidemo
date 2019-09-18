import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App-header">
      <h2>Customer Information</h2>
        <Route path="/" exact component={CustomerList} />
        <Route path="/customer/:id" component={CustomerDetails} />
      </div>
    </Router>
  );
}
export default App;

