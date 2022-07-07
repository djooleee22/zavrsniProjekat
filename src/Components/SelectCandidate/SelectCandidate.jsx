import React, { useContext } from "react";
import "./selectCandidate.scss";
import CandidateCard from "../CandidateCard/CandidateCard";
import {appCtx} from "../context";
import {crpCtx} from "../context";

function SelectCandidate(props) {
    const candidates = useContext(appCtx).candidatesList;
    const setCandidateSelected = useContext(crpCtx).setCandidateSelected;
    const candidateSelected = useContext(crpCtx).candidateSelected;
    const goToCompany = useContext(crpCtx).goToCompany;

    console.log(candidateSelected);

    return <div id="select-candidate">
        <div className="flex-wrap">
            <h2>Select Candidate</h2>
            <input type="text" placeholder="search.."/>
        </div>


        <div className="card-wrapper">
            {candidates.map(el => <div onClick={()=>{
                setCandidateSelected(el)
            }} className="card">
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
        <button onClick={goToCompany} className="btn">Next</button>
    </div>
}

export default SelectCandidate;