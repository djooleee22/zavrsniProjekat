import React, { useContext } from "react";
import "./header.scss";
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import {appCtx} from "../context";


function Header () {

    const {setToken} = useContext(appCtx);
    return <div id="header">
        <img className="ourLogo" src={Logo} alt="slika" />


        <div className="navBar">
            <Link to="/home-page">Home</Link>
            <Link to="/reports-page">Reports</Link>
            <Link to="/create-report-page">Create Report</Link>
            <button onClick={()=> setToken("")}>Log Out</button>
        </div>
    </div>
}

export default Header;