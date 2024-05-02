import React from 'react';
function ProductItem(props) {
    let {id,name,price,category} =props.product
    return (
        <tr className="">
            <td className="">{id}</td>
            <td>{name}</td>
            <td>{price}$</td>
            <td>{category.name}</td>
        </tr>
    );
}
export default ProductItem;