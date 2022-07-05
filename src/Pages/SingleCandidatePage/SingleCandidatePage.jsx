import React, { useContext } from "react";
import "./singleCandidatePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {appCtx} from "../../Components/context";
import {useParams, useRouteMatch} from "react-router-dom";
import moment from "moment";

function SingleCandidatePage (){
    const candidates = useContext(appCtx).candidatesList;
    const reports = useContext(appCtx).reportsList
    const params = useParams();
    // const match = useRouteMatch();

    const singleCandidate = candidates.find(el => el.id == params.id);
    const candidateReports = reports.filter(el => el.candidateId == params.id)
    console.log(candidateReports);

    if(!singleCandidate) return null;

    return <div id="single-candidate-page">
        <Header />
        <div className="wrap-main">
            <div className="main">
                <div className="flex">
                    <img src="https://freesvg.org/img/user1.png" alt="user" />
                    <div className="wrapper">
                        <h2><i>{singleCandidate.name}</i></h2>
                        <p><b>DOB:</b> <i>{moment(singleCandidate.birthday).format("DD.MM.YYYY")}</i></p>
                        <p><b>Education:</b> <i>{singleCandidate.education}</i></p>
                        <p><b>Email:</b> <i>{singleCandidate.email}</i></p>
                    </div>
                </div>
                    <div className="table">
                        <div className="heading-row">
                            <span>Company</span>
                            <span>Interview date</span>
                            <span>Status</span>
                            <span>More Info</span>
                        </div>

                        {candidateReports.map(el => <div className="row">
                            <span>{el.companyName}</span>
                            <span>{moment(el.interviewDate).format("DD.MM.YYYY")}</span>
                            <span>{el.status}</span>
                            <span>Ikonica</span>
                        </div>)}
                    </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default SingleCandidatePage;