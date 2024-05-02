import React, { useEffect, useState } from 'react';
import CustomerItem from "./CustomerItem";
import axios from "axios";

function Customers() {
    let [customers, setCustomers] = useState([]);

    async function getCustomers() {
        let url = 'http://localhost:8080/CUSTOMER-SERVICE/customers'
        let response = await axios.get(url);
        console.log(response.data._embedded.customers);
        setCustomers(response.data._embedded.customers)
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return (
        <div className="container mt-5">
            <table className="table table-bordered table-striped w-75 mx-auto">
                <thead className="thead-dark text-center">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {customers.map((customer, index) => <CustomerItem key={index} customer={customer} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;
