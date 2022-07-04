import React from "react";
import "./selectCompany.scss";

function SelectCompany(props) {
    return <div id="select-company">
        <div className="flex-wrap">
            <h2>Select Company</h2>
            <input type="text" placeholder="search.."/>
        </div>
        <ul className="companies">
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
        </ul>
        <div className="btn-wrap">
        <button className="btn">Back</button>
        <button className="btn">Next</button>
        </div>
    </div>
}

export default SelectCompany;