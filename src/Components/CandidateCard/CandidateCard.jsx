import React from "react";
import "./candidateCard.scss";
import {Link} from "react-router-dom"

function CandidateCard (props) {

    if(!props.podaci) return null;
    return <div id="candidate-card" className={props.selected ? "active" : ""} onClick={(e)=>{
        props.setNext(true)
        props.setCandidateSelected(props.podaci)
        }}>
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

