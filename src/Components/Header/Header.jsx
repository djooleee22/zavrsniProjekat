import React from "react";
import "./header.scss";
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";


function Header () {
    return <div id="header">
        <img className="ourLogo" src={Logo} alt="slika" />


        <div className="navBar">
            <Link to="/home-page">Home</Link>
            <Link to="/reports-page">Reports</Link>
            <Link to="/create-report-page">Create Report</Link>
        </div>
    </div>
}

export default Header;