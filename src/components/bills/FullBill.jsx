import React, { useEffect, useState } from 'react';
import axios from "axios";
import BillItem from "./BillItem";
import { useParams } from "react-router-dom";

function FullBill(props) {
    let [bill, setBill] = useState([]);
    const { billId } = useParams();

    async function getBill() {
        let url = "http://localhost:8080/BILLING-SERVICE/fullBill/" + billId;
        let response = await axios.get(url);
        setBill(response.data)
    }
    useEffect(() => {
        getBill();
    }, []);

    return (
        <div className="container mt-5">
            <h3>Bill Info</h3>
            <ul className="list-group">
                <li className="list-group-item">ID: {bill?.id}</li>
                <li className="list-group-item">Billing Date: {bill?.billingDate}</li>
            </ul>
            <h3 className="mt-3">Customer</h3>
            <ul className="list-group">
                <li className="list-group-item">ID: {bill?.customer?.id}</li>
                <li className="list-group-item">Name: {bill?.customer?.name}</li>
                <li className="list-group-item">Email: {bill?.customer?.email}</li>
            </ul>
            <h3 className="mt-3">Product Items</h3>
            <table className="table table-bordered table-striped mt-3">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                </tr>
                </thead>
                <tbody>
                {bill?.productItems?.map((productItem, index) => (
                    <tr key={index}>
                        <td>{productItem?.id}</td>
                        <td>{productItem?.product?.name}</td>
                        <td>{productItem?.price}</td>
                        <td>{productItem?.quantity}</td>
                        <td>{productItem?.discount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default FullBill;
