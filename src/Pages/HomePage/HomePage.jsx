import React from "react";
import "./homePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CandidateCard from "../../Components/CandidateCard/CandidateCard";

function HomePage (props){
    return <div id="home-page">
        <Header />
        <div className="search-bar"><input type="text" placeholder="Search"/></div>
        <div className="grid-wrapper">
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        </div>
        <Footer />
    </div>
}

export default HomePage