import React, { useContext } from "react";
import "./homePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CandidateCard from "../../Components/CandidateCard/CandidateCard";
import {appCtx} from "../../Components/context"

function HomePage (props){
    const candidates = useContext(appCtx).candidatesList;

    return <div id="home-page">
        <Header />
        <div className="search-bar"><input type="text" placeholder="Search"/></div>
        <div className="grid-wrapper">
            {candidates.map(el => <CandidateCard podaci={el}/>)}
        </div>
        <Footer />
    </div>
}

export default HomePage