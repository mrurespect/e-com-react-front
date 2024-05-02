import React, {useEffect, useState} from 'react';
import CustomerItem from "./CustomerItem";
import axios from "axios";

function Customers(){
    let [customers,setCustomers] =useState([]);

    async function getCustomers(){
        let url ='http://localhost:8080/CUSTOMER-SERVICE/customers'
        let response =await axios.get(url);
        console.log(response.data._embedded.customers);
        setCustomers(response.data._embedded.customers)
    }
    useEffect(()=>{
        getCustomers();
    },[])
    return (
            <div>{
                    <table className="w-50 mx-auto">
                        <thead>
                        <tr className="fw-bold text-center ">
                            <td>id</td>
                            <td>name</td>
                            <td>email</td>
                        </tr>
                        </thead>
                        <tbody className={"text-center"}>
                            {
                                customers.map(
                                    (customer,index)=><CustomerItem customer={customer}/>
                                )
                            }
                        </tbody>

                    </table>
            }
            </div>
        );
}
export default Customers;