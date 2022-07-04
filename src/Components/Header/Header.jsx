import React from "react";
import "./header.scss";
import Logo from '../../images/logo.png'


function Header () {
    return <div id="header">
        <img className="ourLogo" src={Logo} alt="slika" />


        <div className="navBar">
            <a href="">Back To Home</a>
            <a href="">Report</a>
            <a href="">Create Report</a>
        </div>
    </div>
}

export default Header;