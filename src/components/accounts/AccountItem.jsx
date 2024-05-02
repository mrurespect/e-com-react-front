import React from 'react';

function AccountItem(props) {
    let {id,createDate,currency,accountType,balance,customer} =props.account;
    return (
        <tr>
            <td className="text-center">{id}</td>
            <td>{balance}</td>
            <td>{currency}</td>
            <td>{accountType}</td>
            <td>{createDate}</td>
            <td>{customer.name}</td>
        </tr>
    );
}

export default AccountItem;