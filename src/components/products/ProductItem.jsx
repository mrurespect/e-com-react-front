import React from 'react';

function ProductItem(props) {
    let { id, name, price, category } = props.product;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{category.name}</td>
        </tr>
    );
}

export default ProductItem;
