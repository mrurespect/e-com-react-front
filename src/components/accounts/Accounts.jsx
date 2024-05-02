import React, {useEffect, useState} from 'react';
import axios from "axios";
import AccountItem from "./AccountItem";

function Accounts(props) {
    let [accounts ,setAccounts]=useState([]);
    useEffect(()=>{
        getAccounts();
    },[])

    async function getAccounts() {
        let url="http://localhost:8080/ACCOUNT-SERVICE/api/accounts"
        let responce =await axios.get(url);
        setAccounts(responce.data);
        console.log(responce);
    }
    return (
        <table className="w-100 px-2" border="1">
            <thead>
            <tr className="fw-bold text-center ">
                <td >id</td>
                <td >balance</td>
                <td>currency</td>
                <td>accountType</td>
                <td>createDate</td>
                <td>customer name</td>
            </tr>
            </thead>
            <tbody className="text-center">
                 {accounts.map((account,index)=><AccountItem account={account}/>)}
            </tbody>

        </table>
    );
}

export default Accounts;