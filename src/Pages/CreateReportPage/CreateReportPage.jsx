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
        history.push("/reports-page")
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
        <CrpProvider value={{candidateSelected,setCandidateSelected,companySelected,setCompanySelected, goToCompany,goToReportFill, backToCandidate,backToCompany,afterSubmit, }}>
        <div className="main">
            <div className="buttons">
                <div className="options">Select Candidate</div>
                <div className="options">Select Company</div>
                <div className="options">Fill Report</div>
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