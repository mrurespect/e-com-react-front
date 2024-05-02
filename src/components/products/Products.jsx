import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../GraphQl/graphQl";
import ProductItem from "./ProductItem";

function Products(props) {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    let [products, setProducts] = useState([]);

    useEffect(() => {
        if (data) {
            console.log(data);
            setProducts(data?.getProducts);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return  <i className={"fa-spin position-absolute top-50 start-50 translate-middle"} style={{width:"200px"}}></i>;

    return (
        <div className="container mt-5">
            <table className="table table-bordered table-striped w-75 mx-auto">
                <thead className="thead-dark text-center">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {products?.map((product, index) => <ProductItem key={index} product={product} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
