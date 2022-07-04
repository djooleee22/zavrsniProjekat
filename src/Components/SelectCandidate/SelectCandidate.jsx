import React from "react";
import "./selectCandidate.scss";
import CandidateCard from "../CandidateCard/CandidateCard";

function SelectCandidate(props) {
    return <div id="select-candidate">
        <div className="flex-wrap">
            <h2>Select Candidate</h2>
            <input type="text" placeholder="search.."/>
        </div>
        <div className="card-wrapper">
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
        </div>
        <button className="btn">Next</button>
    </div>
}

export default SelectCandidate;