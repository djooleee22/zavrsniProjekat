import React, { useContext } from "react";
import "./selectCandidate.scss";
import CandidateCard from "../CandidateCard/CandidateCard";
import {appCtx} from "../context"

function SelectCandidate(props) {
    const candidates = useContext(appCtx).candidatesList;
    console.log(candidates);

    return <div id="select-candidate">
        <div className="flex-wrap">
            <h2>Select Candidate</h2>
            <input type="text" placeholder="search.."/>
        </div>


        <div className="card-wrapper">
            {candidates.map(el => <div className="card">
                <div className="flex">
                    <img src={el.avatar} alt="user" />
                    <h2>{el.name}</h2>
                </div>
                <div className="wrap-info">
                        <h4>{el.education}</h4>
                        <p>{el.email}</p>
                    </div>
        
            </div>)}
        </div>
        <button className="btn">Next</button>
    </div>
}

export default SelectCandidate;