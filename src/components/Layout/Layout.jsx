import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";


function Layout() {
    return (<>
            <Navbar/>
            <div className="container">
                <Outlet/>
            </div>
    </>
    );
}

export default Layout;