import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className={"container-fluid"}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand ps-5" >e-com</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/"} className={"nav-link"}>customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"Accounts"} className={"nav-link"}>Accounts</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"Bills"} className={"nav-link"}>Bills</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"Products"} className={"nav-link"}>Products</Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;