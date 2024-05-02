import React from 'react';
function CustomerItem(props) {
    let {id,name,email} =props.customer
    return (
        <tr className="">
            <td className="">{id}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
}
export default CustomerItem;