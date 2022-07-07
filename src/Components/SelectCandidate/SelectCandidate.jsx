import React, { useContext } from "react";
import "./selectCandidate.scss";
import CandidateCard from "../CandidateCard/CandidateCard";
import {appCtx} from "../context";
import {crpCtx} from "../context";

function SelectCandidate(props) {
    const candidates = useContext(appCtx).candidatesList;
    const setCandidateSelected = useContext(crpCtx).setCandidateSelected;
    const candidateSelected = useContext(crpCtx).candidateSelected;

    console.log(candidateSelected);

    return <div id="select-candidate">
        <div className="search-bar">
            <input type="text" placeholder="search.."/>
        </div>


        <div className="candidate-card">
            {candidates.map(el => <div onClick={()=>{
                setCandidateSelected(el)
            }} className="card">

                <div className="flex">
                    <img src="https://xsgames.co/randomusers/assets/avatars/male/18.jpg" alt="" />
                    {/* <img src={el.avatar} alt="user" /> */}
                </div>

                <div className="wrap-info">
                        <h2>{el.name}</h2>
                        <h4>{el.education}</h4>
                        <p>{el.email}</p>
                    </div>  
            </div>)}
        </div>

        <button className="btn">Next</button>
    </div>
}

export default SelectCandidate;