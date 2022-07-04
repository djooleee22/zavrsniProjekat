import React from "react";
import "./fillReport.scss";

function FillReport(props) {
    return <div id="fill-report">
        <div className="flex-wrap">
            <h2>Fill Report Details</h2>
            <input type="text" placeholder="search.."/>
        </div>

        <div className="form">
            <label className="fill-report-label" htmlFor="">Interview date:
            <select name="" id="">
                <option value="4/22/2012">21.02.2022</option>
                <option value="4/22/2012"></option>
                <option value="4/22/2012"></option>
                <option value="4/22/2012"></option>
            </select>
            </label>
            <label className="fill-report-label" htmlFor="">Phase:
            <select name="" id="">
                <option value="4/22/2012">21.02.2022</option>
                <option value="4/22/2012"></option>
                <option value="4/22/2012"></option>
                <option value="4/22/2012"></option>
            </select>
            </label>
            <label className="fill-report-label" htmlFor="">Status:
            <select name="" id="">
                <option value="4/22/2012">21.02.2022</option>
                <option value="4/22/2012"></option>
                <option value="4/22/2012"></option>
                <option value="4/22/2012"></option>
            </select>
            </label>
            <p>Note</p>
            <textarea name="" id="" cols="50" rows="10"></textarea>
        </div>

        <div className="btn-wrap">
            <button className="btn">Back</button>
            <button className="btn">Submit</button>
        </div>
    </div>
}

export default FillReport;