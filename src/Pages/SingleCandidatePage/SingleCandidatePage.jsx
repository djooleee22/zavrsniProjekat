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
    // console.log(params);
    // console.log(candidates);
    // const match = useRouteMatch();

    const singleCandidate = candidates.find(el => el.id == params.id);
    const candidateReports = reports.filter(el => el.candidateId == params.id)
    console.log(candidateReports);

    if(!singleCandidate) return null;

    return <div id="single-candidate-page">
        <Header />
        <div className="main">
            <img src="https://freesvg.org/img/user1.png" alt="user" />
            <div className="wrapper">
                 <h2>{singleCandidate.name}</h2>
                <p>{moment(singleCandidate.birthday).format("DD.MM.YYYY")}</p>
                <p>Education: {singleCandidate.education}</p>
                <p>Email: {singleCandidate.email}</p>
            </div>

            <div className="wrap-reports">
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Interview date</th>
                        <th>Status</th>
                        <th>More Info</th>
                    </tr>

                    {candidateReports.map(el => <tr>
                        <td>{el.companyName}</td>
                        <td>{moment(el.interviewDate).format("DD.MM.YYYY")}</td>
                        <td>{el.status}</td>
                        <td>Ikonica</td>
                    </tr>)}
                </table>
            </div>
        </div>
        <Footer />
    </div>
}

export default SingleCandidatePage