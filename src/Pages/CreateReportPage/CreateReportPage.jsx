import React, { useState } from "react";
import "./createReportPage.scss";
import Header from "../../Components/Header/Header";
import SelectCandidate from "../../Components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../Components/Select Company/SelectCompany";
import FillReport from "../../Components/FillReport/FillReport";
import { Route, Switch, Link } from "react-router-dom";


function CreateReportPage(props){
    return <div id="create-report-page">
        <Header/>
        <div className="main">
            <div className="buttons">
                <Link to="/create-report-page">Select Candidate</Link>
                <Link to="/create-report-page/select-company">Select Company</Link>
                <Link to="/create-report-page/fill-report">Fill Report</Link>
            </div>
        <Switch>
            <Route exact path="/create-report-page"><SelectCandidate/></Route>
            <Route path="/create-report-page/select-company"><SelectCompany/></Route>
            <Route path="/create-report-page/fill-report"><FillReport/></Route>
        </Switch>
        </div>
    </div>
}

export default CreateReportPage