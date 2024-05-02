import React, { useEffect, useState } from 'react';
import axios from "axios";
import BillItem from "./BillItem";

function Bills(props) {
    let [bills, setBills] = useState([]);

    async function getBills() {
        let url = "http://localhost:8080/BILLING-SERVICE/fullBill"
        let response = await axios.get(url);
        setBills(response.data)
    }
    useEffect(() => {
        getBills();
    }, []);

    return (
        bills.length!==0?
        <div className="container mt-5">
            <table className="table table-bordered table-striped w-75 mx-auto">
                <thead className="thead-dark text-center">
                <tr>
                    <th>ID</th>
                    <th>Billing Date</th>
                    <th>Customer Name</th>
                    <th>Full Bill</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {bills.map((bill, index) => <BillItem key={index} bill={bill} />)}
                </tbody>
            </table>
        </div>: <i className={"fa-spin position-absolute top-50 start-50 translate-middle"} style={{width:"200px"}}></i>
    );
}

export default Bills;