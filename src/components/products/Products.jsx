import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../service/graphQl";
import ProductItem from "./ProductItem";

function Products(props) {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    let [products,setProducts]=useState([]);
    useEffect(()=>{
        console.log(data);
        setProducts(data?.getProducts)
    },[data]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <table className={"w-50 mx-auto"}>
            <thead className={"fw-bold text-center"}>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>price</td>
                <td>category</td>
            </tr>

            </thead>
            <tbody className={"text-center"}>
            {products?.map((product,index)=><ProductItem product={product}/>)}
            </tbody>

        </table>
    );
}

export default Products;