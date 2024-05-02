import React, { useEffect, useState } from 'react';
import axios from "axios";
import AccountItem from "./AccountItem";

function Accounts(props) {
    let [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccounts();
    }, []);

    async function getAccounts() {
        let url = "http://localhost:8080/ACCOUNT-SERVICE/api/accounts";
        let response = await axios.get(url);
        setAccounts(response.data);
        console.log(response);
    }

    return (
        accounts.length!==0?
        <div className="container mt-5">
            <table className="table table-bordered table-striped w-100 mx-auto">
                <thead className="thead-dark text-center">
                <tr>
                    <th>ID</th>
                    <th>Balance</th>
                    <th>Currency</th>
                    <th>Account Type</th>
                    <th>Create Date</th>
                    <th>Customer Name</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {accounts.map((account, index) => <AccountItem key={index} account={account} />)}
                </tbody>
            </table>
        </div>:<i className={"fa-spin position-absolute top-50 start-50 translate-middle"}></i>
    );
}

export default Accounts;
