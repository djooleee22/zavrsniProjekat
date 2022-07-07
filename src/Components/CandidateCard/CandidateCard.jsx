import React, { useContext } from "react";
import "./candidateCard.scss";
import {appCtx} from "../context"
import {Link} from "react-router-dom"

function CandidateCard (props) {
    const data = useContext(appCtx);

    //console.log(data);
    if(!props.podaci) return null;
    return <div id="candidate-card">
        <div className="flex">
            <img src={props.podaci.avatar} alt="user" />
            
        </div>
        <div className="wrap-info">
            <h2>{props.podaci.name}</h2>
            <h4>{props.podaci.education}</h4>
            <p>{props.podaci.email}</p>
        </div>
        <Link to={`/single-candidate-page/${props.podaci.id}`}>More info</Link>
    </div>
}

export default CandidateCard;

