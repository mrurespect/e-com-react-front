import React from 'react';
import { Link } from "react-router-dom";

function BillItem(props) {
    const { id, billDate, customerName } = props.bill;
    return (
        <tr>
            <td>{id}</td>
            <td>{billDate}</td>
            <td>{customerName}</td>
            <td>
                <Link className="btn btn-primary" to={`/Bills/${id}`}>
                    Full Bill
                </Link>
            </td>
        </tr>
    );
}

export default BillItem;