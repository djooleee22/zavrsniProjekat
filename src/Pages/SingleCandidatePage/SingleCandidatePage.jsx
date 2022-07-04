import React, { useContext } from "react";
import "./singleCandidatePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {appCtx} from "../../Components/context"

function SingleCandidatePage (){
    const data = useContext(appCtx);
    console.log(data);

    return <div id="single-candidate-page">
        <Header />
        <div className="main">
            <img src="https://freesvg.org/img/user1.png" alt="user" />
            <div className="wrapper">
                
            </div>
        </div>
        <Footer />
    </div>
}

export default SingleCandidatePage