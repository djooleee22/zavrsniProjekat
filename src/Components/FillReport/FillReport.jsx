import React from "react";
import "./fillReport.scss";

function FillReport(props) {
  return (
    <div id="fill-report">
      <div className="flex-wrap">
        <h2>Fill Report Details</h2>
      </div>

      <div className="form">
        <label className="fill-label">
          Interview date:
          <select name="interview-date" id="interview-date">
            <option value="4/22/2012">21.02.2022</option>
            <option value="4/22/2012"></option>
            <option value="4/22/2012"></option>
            <option value="4/22/2012"></option>
          </select>
        </label>
        <label className="fill-label">
          Phase:
          <select name="phase" id="phase">
            <option value="4/22/2012">CV</option>
            <option value="4/22/2012">HR</option>
            <option value="4/22/2012">TECH</option>
            <option value="4/22/2012">FINAL</option>
          </select>
        </label>
        <label className="fill-label">
          Status:
          <select name="status" id="status">
            <option value="4/22/2012">Passed</option>
            <option value="4/22/2012">Declined</option>
          </select>
        </label>
        <p>Note:</p>
        <textarea name="" id="" cols="50" rows="20"></textarea>
      </div>

      <div className="btn-wrap">
        <button className="back-btn">Back</button>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default FillReport;
