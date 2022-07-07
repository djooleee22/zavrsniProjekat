import React, { useContext, useState } from "react";
import "./createReportPage.scss";
import Header from "../../Components/Header/Header";
import SelectCandidate from "../../Components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../Components/Select Company/SelectCompany";
import FillReport from "../../Components/FillReport/FillReport";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import {appCtx} from "../../Components/context";
import {CrpProvider} from "../../Components/context";


function CreateReportPage(props){
    const [candidateSelected, setCandidateSelected] = useState("");
    const [companySelected, setCompanySelected] = useState("");
    let history = useHistory();

    function goToCompany() {
        if(candidateSelected) history.push("/create-report-page/select-company");  
    }

    function afterSubmit(){
        history.push("/home-page")
    }

    function goToReportFill(){
        if(companySelected) history.push("/create-report-page/fill-report");
    }

    function backToCandidate(){
        history.push("/create-report-page");
    }

    function backToCompany(){
        history.push("/create-report-page/select-company");
    }



    return (<div id="create-report-page">
        <Header/>
        <CrpProvider value={{candidateSelected,setCandidateSelected,companySelected,setCompanySelected, goToCompany,goToReportFill, backToCandidate,backToCompany,afterSubmit}}>
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
        </CrpProvider>
    </div>)
}

export default CreateReportPage;