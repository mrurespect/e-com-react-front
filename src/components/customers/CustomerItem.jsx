import React from 'react';

function CustomerItem(props) {
    let { id, name, email } = props.customer
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
}

export default CustomerItem;