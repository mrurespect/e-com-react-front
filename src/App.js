import './App.css';
import Customers from "./components/customers/Customers";
import Accounts from "./components/accounts/Accounts";
import Products from "./components/products/Products";
import Bills from "./components/bills/Bills";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import FullBill from "./components/bills/FullBill";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
let routers = createBrowserRouter([
    {path:"/",element:<Layout/>,  children:[
            {path: "Bills/:billId", element:<FullBill/> },
            {path: "Bills", element:<Bills/> },
            {index:true, element:<Customers/> },
            {path: "Products", element:<Products/> },
            {path: "Accounts", element:<Accounts/> },
            {path: "*", element:<NotFound/> },
        ]}
])

function App() {
  return (
    <>
        <RouterProvider router={routers}/>
    </>
  );
}

export default App;

